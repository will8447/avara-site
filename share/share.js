'use strict';
(() => {
  const root = 'https://taqftojtdrthakmovapq.supabase.co';
  const publicKey = 'sb_publishable_I2lgWdeZ3d_sLH06DGW9Hw__mab29Zf';
  const token = window.location.hash.slice(1);
  const byId = id => document.getElementById(id);
  const kinds = {early:['Early','#b78424'],day:['Day','#9b5a38'],night:['Night','#51433e'],late:['Late','#c45132'],off:['Off','#938777'],training:['Training','#80604a']};
  let rota, shown=0;
  function fail(title,message) { byId('rota-title').textContent=title; byId('status').textContent=message; }
  if (!/^[a-f0-9]{64}$/.test(token)) { fail('This link isn’t complete','Open the full link from the person who shared their rota with you.'); return; }
  function validate(data) {
    if (!data || data.version!==1 || typeof data.name!=='string' || !data.name.trim() || data.name.length>160 ||
        !Array.isArray(data.shifts) || !data.shifts.length || data.shifts.length>5000 || typeof data.timeZone!=='string') throw new Error('invalid');
    new Intl.DateTimeFormat('en',{timeZone:data.timeZone}).format();
    const seen=new Set();
    for(const item of data.shifts) {
      if(!item || !/^[a-f0-9]{64}$/.test(item.id) || seen.has(item.id) || !Object.hasOwn(kinds,item.kind) ||
         !Number.isFinite(item.start) || item.start<946684800 || item.start>4102444800 ||
         (item.end!=null && (!Number.isFinite(item.end) || item.end<=item.start || item.end-item.start>604800)) ||
         (item.title!=null && (typeof item.title!=='string' || item.title.length>160))) throw new Error('invalid');
      seen.add(item.id);
    }
  }
  function element(tag,className,text) { const node=document.createElement(tag); node.className=className; if(text!==undefined) node.textContent=text; return node; }
  function showMore() {
    const zone={timeZone:rota.timeZone};
    for(const item of rota.shifts.slice(shown,shown+14)) {
      const date=new Date(item.start*1000), row=element('li','shift');
      const day=element('div','day'); day.append(element('span','',date.toLocaleDateString(undefined,{...zone,weekday:'short'})),element('b','',date.toLocaleDateString(undefined,{...zone,day:'numeric'})));
      const body=element('div','shift-body'); body.style.setProperty('--tone',kinds[item.kind][1]);
      body.append(element('p','shift-title',item.title || kinds[item.kind][0]));
      const fullDate=date.toLocaleDateString(undefined,{...zone,day:'numeric',month:'short',year:'numeric'});
      body.append(element('span','shift-date',fullDate+(item.title ? ' · '+kinds[item.kind][0] : '')));
      if(item.kind!=='off') {
        const clock={...zone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'};
        let times=date.toLocaleTimeString(undefined,clock);
        if(item.end!=null) {
          const end=new Date(item.end*1000);
          const same=date.toLocaleDateString('en-CA',zone)===end.toLocaleDateString('en-CA',zone);
          times+=' – '+end.toLocaleTimeString(undefined,clock)+(same?'':' · '+end.toLocaleDateString(undefined,{...zone,day:'numeric',month:'short'}));
        } else { times+=' · finish not entered'; }
        body.append(element('p','shift-times',times));
      }
      row.append(day,body); byId('shifts').append(row);
    }
    shown=Math.min(shown+14,rota.shifts.length);
    byId('more').hidden=shown===rota.shifts.length;
    byId('more').textContent=`Show more (${shown} of ${rota.shifts.length})`;
  }
  byId('more').addEventListener('click',showMore);
  byId('copy').addEventListener('click',async()=>{
    try { await navigator.clipboard.writeText(window.location.origin+window.location.pathname+'#'+token); byId('copy-status').textContent='Link copied. You can paste it into AutoMate: Shifts → Share → Open rota link.'; }
    catch { byId('copy-status').textContent='Copy the complete link from the address bar or the original message.'; }
  });
  const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),15000);
  fetch(root+'/rest/v1/rpc/automate_read_rota_link',{method:'POST',credentials:'omit',cache:'no-store',referrerPolicy:'no-referrer',signal:controller.signal,
    headers:{'Content-Type':'application/json','apikey':publicKey},body:JSON.stringify({link_token:token})})
    .then(async response=>{
      if(!response.ok) throw new Error('network');
      const text=await response.text(); if(text.length>2097152) throw new Error('invalid');
      const data=JSON.parse(text);
      if(data===null) { fail('This rota is no longer shared','The link has expired or the sender has stopped sharing it. Ask them for a new link.'); return; }
      validate(data); rota=data; rota.shifts.sort((a,b)=>a.start-b.start);
      byId('rota-title').textContent=rota.name+'’s rota';
      byId('status').textContent=rota.shifts.length+' entries · '+rota.timeZone;
      byId('open-app').href='com.flowshift.app://share?token='+token;
      byId('actions').hidden=false; byId('copy-note').hidden=false; showMore();
    }).catch(()=>fail('We couldn’t open the rota','Check your connection and reload this page. If it still won’t open, ask the sender for a new link.'))
    .finally(()=>clearTimeout(timer));
})();
