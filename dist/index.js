"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/assets/marker-icon-2x.png
var require_marker_icon_2x = __commonJS({
  "src/assets/marker-icon-2x.png"(exports2, module2) {
    module2.exports = "./marker-icon-2x-SP63CLEO.png";
  }
});

// src/assets/marker-icon.png
var require_marker_icon = __commonJS({
  "src/assets/marker-icon.png"(exports2, module2) {
    module2.exports = "./marker-icon-2V3QKKVC.png";
  }
});

// src/assets/marker-shadow.png
var require_marker_shadow = __commonJS({
  "src/assets/marker-shadow.png"(exports2, module2) {
    module2.exports = "./marker-shadow-MEXDWUU7.png";
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_core = require("@react-leaflet/core");
var import_leaflet = __toESM(require("leaflet"));
var import_leaflet2 = require("leaflet.markercluster");
delete import_leaflet.default.Icon.Default.prototype._getIconUrl;
import_leaflet.default.Icon.Default.mergeOptions({
  iconRetinaUrl: require_marker_icon_2x().default,
  iconUrl: require_marker_icon().default,
  shadowUrl: require_marker_shadow().default
});
function getPropsAndEvents(props) {
  let clusterProps = {};
  let clusterEvents = {};
  const { children, ...rest } = props;
  Object.entries(rest).forEach(([propName, prop]) => {
    if (propName.startsWith("on")) {
      clusterEvents = { ...clusterEvents, [propName]: prop };
    } else {
      clusterProps = { ...clusterProps, [propName]: prop };
    }
  });
  return { clusterProps, clusterEvents };
}
function createMarkerClusterGroup(props, context) {
  const { clusterProps, clusterEvents } = getPropsAndEvents(props);
  const markerClusterGroup = new import_leaflet.default.MarkerClusterGroup(clusterProps);
  Object.entries(clusterEvents).forEach(([eventAsProp, callback]) => {
    const clusterEvent = `cluster${eventAsProp.substring(2).toLowerCase()}`;
    markerClusterGroup.on(clusterEvent, callback);
  });
  return (0, import_core.createElementObject)(
    markerClusterGroup,
    (0, import_core.extendContext)(context, { layerContainer: markerClusterGroup })
  );
}
var updateMarkerCluster = (instance, props, prevProps) => {
};
var MarkerClusterGroup = (0, import_core.createPathComponent)(
  createMarkerClusterGroup,
  updateMarkerCluster
);
var src_default = MarkerClusterGroup;
