module.exports = function patch(arc,cfn) {
 cfn.Resources.SendPin.Properties.Events.SendPinEvent.Type = 'SNS'
 return cfn
}
