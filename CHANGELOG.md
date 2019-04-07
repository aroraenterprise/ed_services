<a name="1.3.0"></a>
# [1.3.0](https://github.com/aroraenterprise/ed_services/compare/1.3.0...v1.0.6) (2019-04-06)

### Bug Fixes
* **events.yaml**: Fix attendee assign certificate endpoint to accept one certificate id only ([#4](https://github.com/aroraenterprise/ed_events/issues/4))  ([654bccf](https://github.com/aroraenterprise/ed_services/commit/654bccf))

### Features
* add a Changelog ([#3](https://github.com/aroraenterprise/ed_services/issues/3)) ([7d67a20](https://github.com/aroraenterprise/ed_services/commit/7d67a20))

### BREAKING CHANGES
* **events.yaml**: Endpoint change for createAttendeeCertificate & deleteAttendeeCertificate. User's of client library must upgrade to @edropin/events-ts@1.3.0 otherwise certificates add/removal from attendees will not work
