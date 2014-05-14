var LightSensorError = function(err) {
    this.code = (err !== undefined ? err : null);
};

LightSensorError.LIGHTSENSOR_INTERNAL_ERR = 0;
LightSensorError.LIGHTSENSOR_NOT_SUPPORTED = 20;

module.exports = LightSensorError;
7)	LightSensorListener.js内容如下
var LightSensorLumen = function(lumen, timestamp) {
  this.value = lumen;
  this.timestamp = timestamp || new Date().getTime();
};

module.exports = LightSensorLumen;
