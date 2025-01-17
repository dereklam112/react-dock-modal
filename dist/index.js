function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('bootstrap/dist/css/bootstrap.min.css');
var reactstrap = require('reactstrap');
var Dock = _interopDefault(require('react-dock'));
var fa = require('react-icons/fa');
var md = require('react-icons/md');
var fi = require('react-icons/fi');
var bs = require('react-icons/bs');
var reactDeviceDetect = require('react-device-detect');

var styles = {"dmPointer":"_30XxJ","dmFill":"_2SuDt"};

var DockModal = function DockModal(props) {
  var initalType = props.initalType,
      headerName = props.headerName,
      visible = props.visible,
      bgcolor = props.bgcolor,
      fgcolor = props.fgcolor,
      fweight = props.fweight,
      children = props.children,
      params = props.params;

  var _useState = React.useState(initalType),
      type = _useState[0],
      setType = _useState[1];

  var _useState2 = React.useState(visible),
      isVisible = _useState2[0],
      toggleVisibility = _useState2[1];

  var headerStyle = {
    backgroundColor: bgcolor || 'black',
    color: fgcolor || 'white',
    fontWeight: fweight || 'bold'
  };
  var desktopDockWidth = '40%';
  var desktopDockHeight = '70%';
  var minimDockWidth = '25%';
  var minimDockHeight = '10%';
  var defaultModalWidth = '70%';
  var defaultModalHeight = '650px';
  var defaultDockPosX = '10px';

  if (params) {
    var dockWidth = params.dockWidth,
        dockHeight = params.dockHeight,
        minimWidth = params.minimWidth,
        minimHeight = params.minimHeight,
        modalWidth = params.modalWidth,
        modalHeight = params.modalHeight,
        dockPosX = params.dockPosX;
    desktopDockWidth = dockWidth || desktopDockWidth;
    desktopDockHeight = dockHeight || desktopDockHeight;
    minimDockWidth = minimWidth || minimDockWidth;
    minimDockHeight = minimHeight || minimDockHeight;
    defaultModalWidth = modalWidth || defaultModalWidth;
    defaultModalHeight = modalHeight || defaultModalHeight;
    defaultDockPosX = dockPosX || defaultDockPosX;
  }

  var defaultModalStyles = {
    minWidth: defaultModalWidth,
    margin: 'auto',
    position: 'absolute',
    "float": 'left',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  };
  var dockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: reactDeviceDetect.isMobile ? '10px' : 'unset',
    top: 'unset',
    width: reactDeviceDetect.isMobile ? '90%' : desktopDockWidth,
    height: reactDeviceDetect.isMobile ? '100%' : desktopDockHeight,
    right: defaultDockPosX,
    bottom: '5px',
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    margin: reactDeviceDetect.isMobile ? 'auto' : 'unset'
  };
  var minDockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: 'unset',
    top: 'unset',
    width: minimDockWidth,
    height: minimDockHeight,
    right: defaultDockPosX,
    bottom: '5px',
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    margin: reactDeviceDetect.isMobile ? 'auto' : 'unset'
  };

  if (type === 'dock') {
    return /*#__PURE__*/React__default.createElement(Dock, {
      position: "bottom",
      isVisible: isVisible,
      fluid: true,
      dimMode: "none",
      size: 0.6,
      dockStyle: dockStyles
    }, /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      style: headerStyle,
      className: "m-0"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      xs: "6",
      sm: "6",
      md: "8",
      lg: "9",
      xl: "9"
    }, headerName), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      xs: "6",
      sm: "6",
      md: "4",
      lg: "3",
      xl: "3",
      className: "float-right text-right"
    }, /*#__PURE__*/React__default.createElement(fa.FaRegWindowMinimize, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('minim');
      }
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "m-1"
    }, children));
  } else if (type === 'minim') {
    return /*#__PURE__*/React__default.createElement(Dock, {
      position: "bottom",
      isVisible: isVisible,
      fluid: true,
      dimMode: "none",
      size: 0.05,
      dockStyle: minDockStyles
    }, /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      style: headerStyle,
      className: 'm-0 ' + styles.dmFill
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      xs: "4",
      sm: "5",
      md: "6",
      lg: "7",
      xl: "8"
    }, headerName), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      xs: "8",
      sm: "7",
      md: "6",
      lg: "5",
      xl: "4",
      className: "float-right text-right"
    }, /*#__PURE__*/React__default.createElement(fi.FiMaximize2, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('dock');
      }
    }))), /*#__PURE__*/React__default.createElement("div", {
      hidden: true
    }, children));
  } else if (type === 'modal') {
    return /*#__PURE__*/React__default.createElement(reactstrap.Modal, {
      isOpen: isVisible,
      style: defaultModalStyles
    }, /*#__PURE__*/React__default.createElement(reactstrap.ModalBody, {
      className: "p-0",
      style: {
        minHeight: defaultModalHeight
      }
    }, /*#__PURE__*/React__default.createElement(reactstrap.Row, {
      style: headerStyle,
      className: "m-0"
    }, /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      xs: "9",
      sm: "9",
      md: "10",
      lg: "10",
      xl: "10"
    }, headerName), /*#__PURE__*/React__default.createElement(reactstrap.Col, {
      xs: "3",
      sm: "3",
      md: "2",
      lg: "2",
      xl: "2",
      className: "float-right text-right"
    }, /*#__PURE__*/React__default.createElement(fa.FaRegWindowMinimize, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('minim');
      }
    }), /*#__PURE__*/React__default.createElement(bs.BsBoxArrowInDown, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('dock');
      }
    }), /*#__PURE__*/React__default.createElement(md.MdClose, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return toggleVisibility(false);
      }
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "m-1"
    }, children)));
  } else {
    return null;
  }
};

DockModal.defaultProps = {
  initalType: 'dock',
  headerName: 'New DockModal',
  visible: true,
  bgcolor: 'black',
  fgcolor: 'white',
  fweight: 'bold',
  params: {
    dockWidth: '40%',
    dockHeight: ' 70%',
    minimWidth: '25%',
    minimHeight: '10%',
    modalWidth: '70%',
    modalHeight: '650px',
    dockPosX: '10px'
  }
};

module.exports = DockModal;
//# sourceMappingURL=index.js.map
