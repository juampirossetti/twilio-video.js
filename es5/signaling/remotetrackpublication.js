'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackSignaling = require('./track');

/**
 * A {@link RemoteTrackPublication} implementation
 * @extends TrackSignaling
 */

var RemoteTrackPublicationSignaling = function (_TrackSignaling) {
  _inherits(RemoteTrackPublicationSignaling, _TrackSignaling);

  /**
   * Construct a {@link RemoteTrackPublicationSignaling}.
   * @param {Track.SID} sid
   * @param {string} name
   * @param {Track.ID} id
   * @param {Track.Kind} kind
   * @param {boolean} isEnabled
   */
  function RemoteTrackPublicationSignaling(sid, name, id, kind, isEnabled) {
    _classCallCheck(this, RemoteTrackPublicationSignaling);

    var _this = _possibleConstructorReturn(this, (RemoteTrackPublicationSignaling.__proto__ || Object.getPrototypeOf(RemoteTrackPublicationSignaling)).call(this, name, id, kind, isEnabled));

    Object.defineProperties(_this, {
      _error: {
        value: null,
        writable: true
      }
    });
    _this.setSid(sid);
    return _this;
  }

  /**
   * Non-null if subscription failed.
   * @property {?Error}
   */


  _createClass(RemoteTrackPublicationSignaling, [{
    key: 'subscribeFailed',


    /**
     * @param {Error} error
     * @returns {this}
     */
    value: function subscribeFailed(error) {
      if (!this.error) {
        this._error = error;
        this.emit('updated');
      }
      return this;
    }
  }, {
    key: 'error',
    get: function get() {
      return this._error;
    }

    /**
     * Whether the {@link RemoteTrackPublicationSignaling} is subscribed to.
     * @property {boolean}
     */

  }, {
    key: 'isSubscribed',
    get: function get() {
      return !!this.trackTransceiver;
    }
  }]);

  return RemoteTrackPublicationSignaling;
}(TrackSignaling);

module.exports = RemoteTrackPublicationSignaling;