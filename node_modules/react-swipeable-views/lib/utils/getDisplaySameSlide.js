"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var getDisplaySameSlide = function getDisplaySameSlide(props, nextProps) {
  var displaySameSlide = false;

  if (props.children.length && nextProps.children.length) {
    var oldKey = props.children[props.index].key;

    if (oldKey !== null) {
      var newKey = nextProps.children[nextProps.index].key;

      if (oldKey === newKey) {
        displaySameSlide = true;
      }
    }
  }

  return displaySameSlide;
};

exports.default = getDisplaySameSlide;