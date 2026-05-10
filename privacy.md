---
layout: default
title: Privacy Policy
permalink: /privacy
---

# Privacy Policy

**Effective date:** 1 January 2025
**Last updated:** 1 January 2025

This Privacy Policy explains how the **Avara** mobile application ("Avara", "we", "us", "our") handles your information. Avara is a GeoPoly product, published as an iOS application by GeoPoly. By installing or using Avara you agree to this Policy.

We have built Avara to keep as much of your data as possible on your own device. The only data that ever leaves your device is what is strictly required to deliver the AI assistant, voice transcription, optional household sharing, and subscription handling — and only when you choose to use those features.

If you have any questions, please contact us at **geopolyapp@gmail.com**.

---

## 1. What Avara is

Avara is a personal productivity app for shift workers. It helps you track shifts, pay, bills, savings, debts, recurring commitments, calendar events, and includes an optional AI assistant ("Avara AI") that you can ask questions about your data.

---

## 2. Summary

- **Your shifts, pay, bills, savings, debts and notes are stored locally on your iPhone in an encrypted SQLite database.** They are not uploaded to our servers.
- **We do not use any third-party advertising SDKs.** Avara contains no ads.
- **We do not use any analytics, tracking, attribution or behavioural-profiling SDKs.** We do not track you across apps or websites.
- **We do not sell your personal data. Ever.**
- **The AI assistant and voice transcription send the relevant request to our backend, which forwards it to OpenAI for processing.** This only happens when you actively use those features.
- **Optional household sharing uses Apple's CloudKit** to let one Premium subscriber share access with members of their household.
- **You can delete your AI account, AI memory, and all on-device data at any time** from Settings.

---

## 3. Data stored on your device

Almost all of Avara's data lives only on your iPhone, inside the app's private sandbox managed by iOS:

- Shifts, schedules and pay rules
- Bills, recurring bills and payment history
- Savings entries and savings goals
- Debts and debt balance snapshots
- Calendar events created in-app
- People (e.g. household members you've added)
- Income entries
- App settings, preferences, currency and language
- Notification preferences
- Onboarding status

This data is stored in a local SQLite database within the app's sandbox. It is automatically protected by iOS file-level encryption when your device is locked.

We do not have access to this data. It is not uploaded to our servers and is not visible to us.

If you delete Avara from your device, this data is removed by iOS along with the app.

---

## 4. Data stored in iOS Keychain

Avara stores the following short identifiers in the **iOS Keychain** on your device:

- An authentication token (JWT) used to talk to our backend when you use the AI assistant
- Subscription state references used by StoreKit and CloudKit household linking

These remain on your device, are protected by iOS, and are removed when you delete the app or use **Settings → Delete Account**.

---

## 5. Data sent to our backend (only when you use AI features)

When — and only when — you actively use Avara AI (text chat or voice transcription), the app sends the following to our backend at `api.avara.app`:

- An anonymous user identifier derived from your StoreKit transaction (your `originalTransactionId`). This identifier is used purely to enforce daily AI usage limits and to associate your AI memory.
- The text of the message you send to the assistant, or the audio clip you record for transcription.
- A short-lived signed token (JWT) proving you have an active trial or subscription.

We do **not** send your shifts, bills, debts, savings, or other personal records to our backend unless you specifically include that information in a message you write to the AI assistant.

### 5.1 What our backend does with that data

- **Chat messages** are forwarded to **OpenAI** (our model provider) to generate a response, then returned to your device. Messages are not retained on our servers in plaintext beyond the duration of the request.
- **Voice recordings** are forwarded to **OpenAI's Whisper** transcription service, the resulting text is returned to your device, and the audio is discarded immediately after transcription.
- A short-term **rate-limit counter** (per-day, expires after 24 hours) is held in our cache so we can enforce the daily AI message limit for your tier.
- An optional **AI memory record** (see §6) may be updated.

### 5.2 OpenAI

We use OpenAI's API to power the AI assistant and the voice transcription feature. When you use these features, the relevant data is processed by OpenAI on our behalf under their API terms. OpenAI does not use API content to train their models. See OpenAI's privacy practices at https://openai.com/policies/privacy-policy.

---

## 6. AI memory

To make the assistant useful between conversations, Avara may store a small **AI memory record** for your account. This record is limited to lightweight context such as:

- Your job title (if you tell the assistant)
- Your workplace name (if you tell the assistant)
- Open-ended preferences you mention (e.g. "I prefer my week to start on Sunday")

This record:

- Is stored in our backend cache (Upstash Redis) keyed only to your anonymous AI user identifier.
- **Has a rolling 30-day time-to-live** — if you don't use the AI for 30 days, the memory record is automatically deleted.
- Can be deleted at any time by tapping **Settings → Delete Account** (or by calling `DELETE /api/account`).

We do not use this memory record for anything other than improving your own assistant responses. It is not used for advertising, profiling, or shared with third parties beyond the OpenAI request flow described in §5.

---

## 7. Permissions Avara may request

Avara only requests permissions when you use the relevant feature, and you can change or revoke them at any time in **iOS Settings → Avara**.

| Permission | Why | When it's used |
|---|---|---|
| **Microphone** | To record voice messages for the AI assistant. | Only when you tap the microphone button. Audio is sent to OpenAI for transcription as described in §5, then discarded. |
| **Speech Recognition** | iOS framework used by voice features. | Only during voice input. |
| **Calendar (EventKit, full access)** | To import existing calendar events you choose, and to create or update events you ask Avara to create on your behalf. | Only when you opt in to calendar import or ask the AI to create an event. We never silently read or modify your calendar. |
| **Camera** | To scan QR codes only. Used when linking a partner's shared subscription (you scan their QR code to receive premium access) and when importing shift schedules from another device via QR. No photos, videos, or images are captured, stored, or uploaded. The camera is used solely for QR metadata recognition. | Only when you choose to scan a QR code. Shifts can also be imported via file without using the camera. |
| **Notifications** | To remind you about shifts, bills, paydays and tasks you've set up locally. | All notifications are scheduled locally on your device. We do not send push notifications from a server. |

We do **not** request location, contacts, photo library, motion, health, Bluetooth, or local-network access.

---

## 8. Subscriptions and StoreKit

Subscriptions are processed by **Apple** through your App Store account. Avara never sees your payment details.

When you start a trial or subscribe:

- The app receives a signed StoreKit 2 transaction ("JWS") from Apple.
- The app sends that JWS to our backend so we can verify it directly against Apple's published certificate chain and confirm your active entitlement.
- We extract only the technical fields needed to validate the transaction (transaction identifier, original transaction identifier, product identifier, expiration date, environment, bundle identifier).
- We issue a short-lived signed JWT token that the app uses to call AI endpoints.

We do **not** receive your name, email, billing address, card details, or Apple ID from this flow.

### 8.1 Free trial

If your account does not have an active subscription, you may activate a one-time **7-day AI trial** (5 AI messages per day). The trial start time is recorded against your anonymous user identifier in our backend solely so we can enforce the trial duration.

### 8.2 Daily AI limits

To keep the service sustainable we apply a daily limit to AI usage:

- Free trial: 5 AI messages per day, resets at 00:00 UTC.
- Premium: 60 AI messages per day, resets at 00:00 UTC.

Counter keys automatically expire after 24 hours.

### 8.3 Household sharing (optional)

A Premium subscriber may optionally share access with members of their household using Apple's **CloudKit** public database. When you create or join a household share:

- A `SubscriptionShare` record containing your household identifier (a UUID generated by the app), the original transaction identifier of the paying account, an expiry date, and a list of joined member identifiers is written to the public CloudKit database in the Avara container.
- This record is stored under your iCloud account; we do not access your iCloud account directly.
- Joining a share is optimistically validated against an active subscription before access is granted.

You can leave a household share at any time from Settings.

---

## 9. Account deletion

You can delete everything we hold for you at any time:

1. Open **Settings → Delete Account** in the app.
2. Confirm the destructive prompt.

This will:

- Call `DELETE /api/account` on our backend, which deletes your AI memory record and your AI rate-limit / trial state from our cache.
- Remove your authentication token from the iOS Keychain.
- Reset your AI tier locally to "free".
- Wipe all on-device data: shifts, bills, savings, debts, debt balance snapshots, events, people, income entries, bill templates, and onboarding state.
- Leave any active CloudKit household share via your own iCloud account.

After deletion, no account-linked record remains in our backend. Apple-managed subscription history is governed by Apple, not by us — to cancel an active subscription, use **iOS Settings → Apple ID → Subscriptions**.

You may also delete only your AI memory (without deleting your account) by calling `DELETE /api/memory` from a future Settings option, or by contacting us at **geopolyapp@gmail.com**.

---

## 10. Data retention

| Data | Where | Retention |
|---|---|---|
| Shifts, bills, savings, debts, events, people, settings | On your device only | Until you delete them, delete the app, or tap **Delete Account** |
| iOS Keychain token | On your device only | Until you delete the app or tap **Delete Account** |
| AI memory record | Our backend cache (Upstash Redis) | Rolling 30-day TTL, refreshed on use; deletable on demand |
| AI daily-quota counters | Our backend cache | Auto-expires 24 hours after first write |
| AI trial start timestamp | Our backend cache | Until you tap **Delete Account** |
| Chat & transcription request bodies | OpenAI | Per OpenAI's API retention policy; not stored by Avara |
| StoreKit transaction (JWS) | Validated in-flight; not persisted | Not retained |
| CloudKit household share record | Apple's CloudKit public database under your iCloud account | Until expiry, manual deletion, or share owner action |

---

## 11. Sharing of data

We do not sell, rent or trade your personal data. We share data only with the following processors, and only to the minimum extent necessary to operate the service:

- **OpenAI, L.L.C.** — chat completion and Whisper voice transcription, when you actively use AI features.
- **Vercel Inc.** — hosts the backend that proxies AI requests.
- **Upstash, Inc.** — hosts the cache used for AI memory, trial state, and rate-limiting counters.
- **Apple Inc.** — runs the App Store, StoreKit, iOS Keychain, EventKit and CloudKit; hosts your household share record under your iCloud account.

We do not share data with any advertising network, data broker, analytics provider, or social network.

---

## 12. Children

Avara is not directed at children under the age of 13 (or the equivalent minimum age in your jurisdiction) and we do not knowingly collect personal information from children. If you believe a child has used Avara, please contact us at **geopolyapp@gmail.com** and we will delete any associated data.

---

## 13. Your rights (UK & EU)

If you are located in the UK or the European Economic Area, the UK GDPR and EU GDPR give you the following rights in respect of personal data we process:

- The right to **access** the data we hold about you (in practice this is limited to your AI memory record, AI trial start time, and rate-limit counters — everything else is on your own device).
- The right to **rectification** of inaccurate data.
- The right to **erasure** ("right to be forgotten") — exercised in-app via **Settings → Delete Account**.
- The right to **restrict** or **object to** our processing.
- The right to **data portability** for the data we hold (limited as above).
- The right to **withdraw consent** at any time where we relied on consent (e.g. by disabling permissions in iOS Settings).
- The right to **lodge a complaint** with your local supervisory authority. In the UK, that is the Information Commissioner's Office (https://ico.org.uk).

To exercise any of these rights, contact us at **geopolyapp@gmail.com**.

The lawful bases on which we process the limited data described in this Policy are: (a) **performance of a contract** (delivering the AI assistant, voice transcription, and subscription you requested) and (b) **legitimate interests** (operating, securing and rate-limiting the service). We do not rely on consent for any processing other than what iOS itself collects via permission prompts.

---

## 14. International transfers

Our backend infrastructure is operated by Vercel and Upstash and may process requests in regions including the United States and the European Union. OpenAI processes API requests in the United States. Where personal data is transferred outside the UK / EEA, transfers are made under the standard contractual clauses or equivalent safeguards published by the relevant processor.

---

## 15. Security

We take reasonable technical and organisational measures to protect data we process:

- All network requests between the app and our backend use TLS.
- On-device data is stored inside the iOS app sandbox and benefits from iOS data protection (file-level encryption when your device is locked).
- Authentication tokens are stored in the iOS Keychain.
- Our backend validates every Apple StoreKit JWS against Apple's published certificate chain, and rejects mismatched bundle identifiers, non-Production environments, and non-subscription payload types.
- AI endpoints are rate-limited per user.

No system is perfectly secure. If we ever become aware of a personal-data breach affecting you, we will notify you and the relevant supervisory authority where legally required.

---

## 16. Changes to this Policy

We may update this Policy from time to time. The "Last updated" date at the top will reflect the latest revision. Material changes will be communicated in-app or via the App Store listing. Your continued use of Avara after a change takes effect constitutes acceptance of the revised Policy.

---

## 17. Contact

If you have any questions, requests, or concerns about this Privacy Policy or your data:

**Email:** geopolyapp@gmail.com

We aim to respond within a reasonable time, and in any event within the time required by applicable law.
