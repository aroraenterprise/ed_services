
### Features:
* **events.yaml**: Added faqs, description, city and country to event
* **events.yaml**: Search facets for events
* **events.yaml**: Search 2 for events with more query inputs
* **events.yaml**: Remove multiple 10 requirement for limits
* **events.yaml**: Added filters for facet search
* **events.yaml**: Removed reminders input from event and added isReminder attribute to messages

### Fixes:
* **events.yaml**: Fixed location in events and added city/country/placeId to location and added placeId to address

### Breaking Changes:
* **events.yaml**: Removed EePicture as it is deprecated an no longer used

<a name="1.5.1"></a>
# [1.5.0](https://github.com/aroraenterprise/ed_services/compare/1.5.1...1.5.0) (2019-05-22)

### Features:
* **accounts.yaml**: Added user files endpoint
* **accounts.yaml**: Added unsplash endpoints for search and download event
* **accounts.yaml**: Added create image endpoint to files for Imagekit and Unsplash
* **events.yaml & accounts.yaml**: Added support for new images as featured image and removed pictures
* **accounts-internal.yaml**: Added accounts internal

<a name="1.5.0"></a>
# [1.5.0](https://github.com/aroraenterprise/ed_services/compare/1.5.0...1.3.6) (2019-05-22)

### Features:
* **store.yaml**: Added filter to list members

### Breaking Changes:
* **store.yaml**: Renamed getMembers endpoint to list members
  
<a name="1.3.6"></a>
# [1.3.6](https://github.com/aroraenterprise/ed_services/compare/1.3.6...1.3.5) (2019-05-22)

### Features:
* **store.yaml**: Add export endpoint for order items
* **store.yaml**: Added filter timestamp for order items

<a name="1.3.5"></a>
# [1.3.5](https://github.com/aroraenterprise/ed_services/compare/1.3.5...1.3.4) (2019-05-21)

### Features:
* **events.yaml**: Added preview endpoint for certificates and support for version of 2 of certificates
* **events.yaml**: Added memberships to event model that are populated based on store items
* **events.yaml**: Added endpoint for certificate assignment rules which now replaces automations (deprecated) for dropin trigger and certificate assignment
* **events.yaml**: Added endpoint for certificate templates listing
* **events.yaml**: Added isPace/pace to certificate to make them credit aware
* **events.yaml**: Added auth signature to pace providers
* **events.yaml**: Added user certificate retrieving and updating endpoints
* **events.yaml**: Added model for certificate eCredits. dynamic crediting
* **events.yaml**: Added endpoints for certificate eCredits, create, update, delete, list
* **events_internal.yaml**: Added endpoint for upserting and deleting certificate templates

### Bug Fixes:
* **store.yaml**: Fixed pagination for memberships

<a name="1.3.4"></a>
# [1.3.4](https://github.com/aroraenterprise/ed_services/compare/1.3.4...1.3.3) (2019-04-16)

### Features
* **events.yaml**: added create survey and delete survey endpoints, added isDeactivated flag to events and id to survey answers
* **store.yaml**: cart validation added order item user information and needs more information flag
* **store_internal.yaml**: Added pubsub endpoint for event survey update

<a name="1.3.3"></a>
# [1.3.3](https://github.com/aroraenterprise/ed_services/compare/1.3.3...1.3.2) (2019-04-16)

### Features
* **store.yaml**: updated attributes for storeitem and orderitem for deletion and deactivation.
* **store-internal.yaml**: Updated store-internal to follow events internal design
* **events-internal.yaml**: Internal events yaml added to handle all cron, tasks, pubsub and admin endpoints.

<a name="1.3.2"></a>
# [1.3.2](https://github.com/aroraenterprise/ed_services/compare/1.3.2...1.3.1) (2019-04-11)

### Features
* **store-internal.yaml**: new Store API for internal services usage. Added update store item.
* **all yaml**: Added isDeleted property to all output models

<a name="1.3.1"></a>
# [1.3.1](https://github.com/aroraenterprise/ed_services/compare/1.3.1...1.3.0) (2019-04-07)

### Bug Fixes
* **events.yaml**: add reminder to event creation
* **build**: added version major/minor to update-module script

<a name="1.3.0"></a>
# [1.3.0](https://github.com/aroraenterprise/ed_services/compare/1.3.0...v1.0.6) (2019-04-07)

### Bug Fixes
* **events.yaml**: Fix attendee assign certificate endpoint to accept one certificate id only ([#4](https://github.com/aroraenterprise/ed_events/issues/4))  ([654bccf](https://github.com/aroraenterprise/ed_services/commit/654bccf))

### Features
* add npm scripts to link the events/store and accounts ts services using npm link. ([b3e26c3](https://github.com/aroraenterprise/ed_services/commit/b3e26c3))
* add a Changelog ([#3](https://github.com/aroraenterprise/ed_services/issues/3)) ([7d67a20](https://github.com/aroraenterprise/ed_services/commit/7d67a20))

### BREAKING CHANGES
* **events.yaml**: Endpoint change for createAttendeeCertificate & deleteAttendeeCertificate. User's of client library must upgrade to @edropin/events-ts@1.3.0 otherwise certificates add/removal from attendees will not work
