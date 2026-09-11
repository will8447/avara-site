---
layout: default
title: AutoMate Privacy Policy
permalink: /privacy
---

# AutoMate privacy policy

AutoMate is a GeoPoly product that helps you organise shifts, bills and personal planning. Contact us about your information at **geopolyapp@gmail.com**.

**Operator/controller:** GeoPoly. **Contact:** geopolyapp@gmail.com.
**Last updated:** 11 September 2026. This notice describes AutoMate 1.2.0 and later. For earlier Avara versions, see the [earlier notice](https://will8447.github.io/avara-site/privacy-avara-legacy). Updating the app does not itself delete records from the former AI service; contact us for help with those records.

### Using AutoMate without an account

Your entries are stored in a SQLite database inside the app's private device storage. You can add shifts, people, bills, income, savings, debts, events, notes and planning preferences without creating an account. Device protection is provided by iOS/iPadOS; the database is not a separately password-encrypted SQLCipher database.

Deleting the app can remove its local data. A device backup may contain app data depending on your Apple backup settings. Keep a backup you control if you need an independent recovery copy.

### Optional account sync

When you choose Sign in with Apple or Google, the provider supplies an account identifier and available email/profile information to our authentication service. Apple may supply a private relay address. AutoMate stores its session credentials in the device Keychain. It does not receive your Apple or Google password.

Signing in uploads your supported planning records to our Supabase project: shifts and templates, people and their schedules, bills and repeating-bill templates, events, income, savings, debts and balances, accounts, notes and planning settings. These settings can include your name, job details and home/work addresses or coordinates if you entered them. Your account identifier connects this information across your devices.

The service stores your current plan and up to 100 prior accepted plan revisions. Updates sync while the app is open and when it next opens after reconnecting. Conflicting changes require your choice. This service uses encrypted network connections and access controls; it is not end-to-end encryption that prevents the service operator from accessing stored plans.

Supabase hosts the account service. Our current Free project provides one day of API/database logs visible to us and does not include downloadable automatic backups. This is not a promise that every underlying security or infrastructure record is physically erased after one day. Operational records are handled under the provider's applicable retention and security processes. See [Supabase pricing](https://supabase.com/pricing), [backup documentation](https://supabase.com/docs/guides/platform/backups) and [privacy policy](https://supabase.com/privacy). The selected primary database region is London. A primary region does not by itself guarantee that every provider operation or support activity occurs only in the UK.

### Device permissions and optional services

- **Alarms and notifications:** scheduled locally when you enable them and the operating system grants permission. Alarm/notification permissions are separate on each device and are not copied through account sync.
- **Apple Maps:** when you configure addresses and use route information, address searches, route coordinates and departure times are processed through Apple Maps. You can instead use a manually entered commute duration.
- **Siri and Shortcuts:** if you invoke a shift action, AutoMate reads your own rota stored on that device and returns a text/spoken summary to Apple's system. The actions require device authentication and may include duty names, dates and working hours. They exclude other people's calendars, bills, private notes and absence reasons. Siri and Shortcuts process the request and result under your Apple settings and Apple's terms; this is not a claim that all Siri processing stays on your device. These actions do not send a separate request to AutoMate's cloud service.
- **Bill logos:** the existing logo resolver can request a provider domain from Clearbit and Google's favicon service. Those services receive the requested domain and normal connection information such as IP address. Bill amounts, due dates and notes are not included in logo requests.
- **Camera:** used when you choose to import a schedule through a QR code. The app reads the QR content; it does not upload camera recordings to AutoMate's account service.
- **Apple purchases:** Apple handles payment details. The app checks StoreKit entitlements to unlock Premium. Cloud sign-in does not transfer a subscription between different purchasing Apple accounts.

### Sharing and file backups

“Share a week” creates an availability image and text. Times are optional; bills, money, addresses, notes and absence reasons are excluded. You choose the destination in the system share sheet. File/QR schedule exports contain the schedule information shown by that export flow; they are different from the limited availability card.

Rota links are a separate optional feature. Creating one uploads a limited snapshot (rota name/time zone, eligible shift dates/types/times, and duty titles only if selected) to Supabase for 30 days. Notes, addresses, money and absence entries are excluded. Anyone holding the unguessable link can view that snapshot without an account; recipients can import it into a separate person's calendar. The public preview is hosted on GitHub Pages and requests the snapshot from Supabase. The link token is in the URL fragment and the page disables referrers and analytics. Hosting and API providers still receive normal connection information such as IP address.

Revoking a rota link clears its saved snapshot and prevents new access. Expired snapshots become inaccessible and are cleaned up on a later link creation by the owner, or with account deletion; expiry does not promise immediate physical removal. Links and imported copies do not automatically update. Revocation or account deletion cannot erase someone else's downloaded copy.

Manual backup files contain planning data and selected preferences, protected with your passphrase using AES-GCM and a derived key. Keep both the file and passphrase safe. Backups do not contain account session credentials or App Store entitlements. Account ownership and alarm permissions are preserved on the destination device when restoring a file. A restored plan can sync to the account already signed in there.

### Deleting information

- Delete individual entries in the app to update the current plan. If account sync is enabled, deleted records can remain as sync markers and in prior revisions until those versions are replaced or the account is deleted.
- **Settings → Account & sync → Delete cloud account** removes your Supabase sign-in account, current plan, stored plan revisions and hosted rota links. Already downloaded device copies and independently exported files remain where they were saved. If Apple cannot be reconnected for revocation, follow the displayed instructions to disconnect AutoMate in your Apple account too.
- **Settings → Remove all data from this device** signs out and clears device planning data. It does not delete the cloud account. Signing out alone keeps the local copy.
- Manage or cancel Premium separately in your Apple account's subscriptions settings.

Account deletion removes the account and plan records from the active service. Residual operational records and provider backups, where held, may remain for security, recovery or legal requirements; they are not a plan available for normal account recovery. Contact us for the applicable retention details or a specific deletion request. Contact support if you cannot access in-app deletion or need help with historical Avara data.

### Support, processors and international processing

If you email support, we receive your email address and the information you choose to send. We keep correspondence as needed to resolve your request, maintain relevant service records and meet applicable legal obligations; retention depends on the nature of the request and any ongoing dispute. Do not send passwords or unnecessary sensitive records.

Providers include Supabase for account storage and authentication, Apple and Google for chosen sign-in services, Apple for Maps and purchases, GitHub for the public website, and the logo services described above. Your chosen sharing service receives what you send through it. Providers may process operational or support information outside the UK, including in the EEA and United States. Their published terms describe their safeguards, including contractual transfer clauses where applicable. Contact us for information about the safeguards applying to your data. We do not sell personal data.

### Purposes, rights and changes

We use account and planning data to provide the sync and recovery features you request, and operational information to secure and maintain the service. We rely on performance of the service contract to provide requested account, planning and subscription functions, and legitimate interests to maintain security and respond to support requests. We ask for express consent before syncing planning data that may include health information, such as sick-leave entries. You can stop future syncing by signing out and withdraw this consent by deleting the cloud account. You can continue using local planning without signing in. Only enter another person's data if you have permission to store and sync it. The reviewed app includes no advertising or cross-app tracking SDK. This statement does not mean optional hosting, Maps, logo and authentication providers receive no data.

You may contact us to request access, correction, deletion or a portable copy, or to exercise applicable rights concerning processing. You can complain to your local data-protection authority, including the [ICO](https://ico.org.uk/) in the UK.

The existing age policy is retained: AutoMate is not directed at children under 13, or the applicable higher minimum age in their country. Contact **geopolyapp@gmail.com** about a child's information.  We will date material updates to this notice and communicate relevant changes through the app or listing.
