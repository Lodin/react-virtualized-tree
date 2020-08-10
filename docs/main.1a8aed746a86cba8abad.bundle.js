(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ FixedSizeTree_FixedSizeTree; });\n__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ VariableSizeTree_VariableSizeTree; });\n\n// UNUSED EXPORTS: Row\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\nvar objectWithoutPropertiesLoose = __webpack_require__(139);\nvar objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js\nvar helpers_extends = __webpack_require__(30);\nvar extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js\nvar inheritsLoose = __webpack_require__(79);\nvar inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(0);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-window/dist/index.esm.js + 5 modules\nvar index_esm = __webpack_require__(140);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js\nvar assertThisInitialized = __webpack_require__(103);\nvar assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);\n\n// CONCATENATED MODULE: ./src/Tree.tsx\n\n\n\n\n/* eslint-disable react/no-unused-state,@typescript-eslint/consistent-type-assertions */\n\n// eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/prefer-readonly-parameter-types\nvar Tree_Row = function Row(_ref) {\n  var index = _ref.index,\n      _ref$data = _ref.data,\n      Node = _ref$data.component,\n      treeData = _ref$data.treeData,\n      order = _ref$data.order,\n      records = _ref$data.records,\n      style = _ref.style,\n      isScrolling = _ref.isScrolling;\n  return /*#__PURE__*/react_default.a.createElement(Node, Object.assign({}, records[order[index]], {\n    style: style,\n    isScrolling: isScrolling,\n    treeData: treeData\n  }));\n};\nvar Tree_createTreeComputer = function createTreeComputer(_ref2) {\n  var createRecord = _ref2.createRecord,\n      shouldUpdateRecords = _ref2.shouldUpdateRecords,\n      updateRecord = _ref2.updateRecord,\n      updateRecordOnNewData = _ref2.updateRecordOnNewData;\n  return function (_ref3, state, options) {\n    var _options$refreshNodes;\n\n    var treeWalker = _ref3.treeWalker;\n\n    if (options === void 0) {\n      options = {};\n    }\n\n    var order = [];\n\n    var records = extends_default()({}, state.records);\n\n    var iter = treeWalker((_options$refreshNodes = options.refreshNodes) != null ? _options$refreshNodes : false); // Here we are updating all records to the provided openness state described\n    // in UpdateOptions. It should be done before the tree re-calculation\n    // because tree walker omits closed nodes while update is required for all\n    // of them.\n\n    if (shouldUpdateRecords(options)) {\n      for (var id in records) {\n        updateRecord(records[id], id, options);\n      }\n    }\n\n    var isPreviousOpened = false; // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,no-constant-condition\n\n    while (true) {\n      var _iter$next = iter.next(isPreviousOpened),\n          done = _iter$next.done,\n          value = _iter$next.value;\n\n      if (done || !value) {\n        break;\n      }\n\n      var _id = void 0;\n\n      if (typeof value === \'string\' || typeof value === \'symbol\') {\n        _id = value;\n      } else {\n        _id = value.id;\n        var _record = records[_id];\n\n        if (!_record) {\n          records[_id] = createRecord(value, state);\n        } else {\n          _record.data = value;\n          updateRecordOnNewData(_record, options);\n        }\n      }\n\n      if (records[_id]) {\n        order.push(_id);\n        isPreviousOpened = records[_id].isOpen;\n      } else if (false) {}\n    }\n\n    return {\n      order: order,\n      records: records\n    };\n  };\n};\n\nvar Tree_Tree = /*#__PURE__*/function (_PureComponent) {\n  inheritsLoose_default()(Tree, _PureComponent);\n\n  Tree.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {\n    var component = props.children,\n        treeData = props.itemData,\n        treeWalker = props.treeWalker;\n    var computeTree = state.computeTree,\n        order = state.order,\n        oldTreeWalker = state.treeWalker;\n    return extends_default()({\n      component: component,\n      treeData: treeData\n    }, treeWalker !== oldTreeWalker || !order ? computeTree(props, state, {\n      refreshNodes: true\n    }) : null);\n  };\n\n  function Tree(props, context) {\n    var _this;\n\n    _this = _PureComponent.call(this, props, context) || this;\n    _this.list = /*#__PURE__*/react_default.a.createRef();\n    _this.state = {\n      component: props.children,\n      recomputeTree: _this.recomputeTree.bind(assertThisInitialized_default()(_this)),\n      records: {},\n      treeWalker: props.treeWalker\n    };\n    return _this;\n  }\n\n  var _proto = Tree.prototype;\n\n  _proto.recomputeTree = function recomputeTree(options) {\n    var _this2 = this;\n\n    return new Promise(function (resolve) {\n      _this2.setState(function (prevState) {\n        return prevState.computeTree(_this2.props, prevState, options);\n      }, resolve);\n    });\n  };\n\n  _proto.scrollTo = function scrollTo(scrollOffset) {\n    var _this$list$current;\n\n    (_this$list$current = this.list.current) == null ? void 0 : _this$list$current.scrollTo(scrollOffset);\n  };\n\n  _proto.scrollToItem = function scrollToItem(id, align) {\n    var _this$list$current2;\n\n    // eslint-disable-next-line react/destructuring-assignment\n    (_this$list$current2 = this.list.current) == null ? void 0 : _this$list$current2.scrollToItem(this.state.order.indexOf(id), align);\n  };\n\n  return Tree;\n}(react["PureComponent"]);\n\nTree_Tree.defaultProps = {\n  rowComponent: Tree_Row\n};\n/* harmony default export */ var src_Tree = (Tree_Tree);\n// CONCATENATED MODULE: ./src/utils.ts\nvar identity = function identity(value) {\n  return value;\n};\nvar utils_createRecord = function createRecord(data, _ref) {\n  var recomputeTree = _ref.recomputeTree;\n  var record = {\n    data: data,\n    isOpen: data.isOpenByDefault,\n    toggle: function toggle() {\n      record.isOpen = !record.isOpen;\n      return recomputeTree({\n        refreshNodes: record.isOpen\n      });\n    }\n  };\n  return record;\n};\nvar utils_shouldUpdateRecords = function shouldUpdateRecords(_ref2) {\n  var opennessState = _ref2.opennessState,\n      _ref2$useDefaultOpenn = _ref2.useDefaultOpenness,\n      useDefaultOpenness = _ref2$useDefaultOpenn === void 0 ? false : _ref2$useDefaultOpenn;\n  return !!opennessState || useDefaultOpenness;\n};\nvar utils_updateRecord = function updateRecord(record, recordId, _ref3) {\n  var _opennessState;\n\n  var opennessState = _ref3.opennessState,\n      _ref3$useDefaultOpenn = _ref3.useDefaultOpenness,\n      useDefaultOpenness = _ref3$useDefaultOpenn === void 0 ? false : _ref3$useDefaultOpenn;\n  record.isOpen = useDefaultOpenness ? record.data.isOpenByDefault : (_opennessState = opennessState == null ? void 0 : opennessState[recordId]) != null ? _opennessState : record.isOpen;\n};\nvar utils_updateRecordOnNewData = function updateRecordOnNewData(record, _ref4) {\n  var _ref4$useDefaultOpenn = _ref4.useDefaultOpenness,\n      useDefaultOpenness = _ref4$useDefaultOpenn === void 0 ? false : _ref4$useDefaultOpenn;\n\n  if (useDefaultOpenness) {\n    record.isOpen = record.data.isOpenByDefault;\n  }\n};\n// CONCATENATED MODULE: ./src/FixedSizeTree.tsx\n\n\n\n\n\n\n\nvar FixedSizeTree_computeTree = Tree_createTreeComputer({\n  createRecord: utils_createRecord,\n  shouldUpdateRecords: utils_shouldUpdateRecords,\n  updateRecord: utils_updateRecord,\n  updateRecordOnNewData: utils_updateRecordOnNewData\n});\nvar FixedSizeTree_FixedSizeTree = /*#__PURE__*/function (_Tree) {\n  inheritsLoose_default()(FixedSizeTree, _Tree);\n\n  function FixedSizeTree(props, context) {\n    var _this;\n\n    _this = _Tree.call(this, props, context) || this;\n    _this.state = extends_default()({}, _this.state, {\n      computeTree: FixedSizeTree_computeTree\n    });\n    return _this;\n  }\n\n  var _proto = FixedSizeTree.prototype;\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        children = _this$props.children,\n        treeWalker = _this$props.treeWalker,\n        rowComponent = _this$props.rowComponent,\n        rest = objectWithoutPropertiesLoose_default()(_this$props, ["children", "treeWalker", "rowComponent"]);\n\n    return /*#__PURE__*/react_default.a.createElement(index_esm["a" /* FixedSizeList */], Object.assign({}, rest, {\n      itemData: this.state,\n      itemCount: this.state.order.length,\n      ref: this.list\n    }), rowComponent);\n  };\n\n  return FixedSizeTree;\n}(src_Tree);\n// CONCATENATED MODULE: ./src/VariableSizeTree.tsx\n\n\n\n\n\n\n\n\nvar VariableSizeTree_computeTree = Tree_createTreeComputer({\n  createRecord: function createRecord(data, _ref) {\n    var recomputeTree = _ref.recomputeTree,\n        resetAfterId = _ref.resetAfterId;\n    var record = {\n      data: data,\n      height: data.defaultHeight,\n      isOpen: data.isOpenByDefault,\n      resize: function resize(height, shouldForceUpdate) {\n        record.height = height;\n        resetAfterId(record.data.id, shouldForceUpdate);\n      },\n      toggle: function toggle() {\n        record.isOpen = !record.isOpen;\n        return recomputeTree({\n          refreshNodes: record.isOpen,\n          useDefaultHeight: true\n        });\n      }\n    };\n    return record;\n  },\n  shouldUpdateRecords: function shouldUpdateRecords(options) {\n    var _options$useDefaultHe;\n\n    return utils_shouldUpdateRecords(options) || ((_options$useDefaultHe = options.useDefaultHeight) != null ? _options$useDefaultHe : false);\n  },\n  updateRecord: function updateRecord(record, recordId, options) {\n    if (options.useDefaultHeight) {\n      record.height = record.data.defaultHeight;\n    }\n\n    utils_updateRecord(record, recordId, options);\n  },\n  updateRecordOnNewData: function updateRecordOnNewData(record, options) {\n    utils_updateRecordOnNewData(record, options);\n\n    if (options.useDefaultHeight) {\n      record.height = record.data.defaultHeight;\n    }\n  }\n});\nvar VariableSizeTree_VariableSizeTree = /*#__PURE__*/function (_Tree) {\n  inheritsLoose_default()(VariableSizeTree, _Tree);\n\n  function VariableSizeTree(props, context) {\n    var _this;\n\n    _this = _Tree.call(this, props, context) || this;\n    _this.getItemSize = _this.getItemSize.bind(assertThisInitialized_default()(_this));\n    _this.state = extends_default()({}, _this.state, {\n      computeTree: VariableSizeTree_computeTree,\n      resetAfterId: _this.resetAfterId.bind(assertThisInitialized_default()(_this))\n    });\n    return _this;\n  }\n\n  var _proto = VariableSizeTree.prototype;\n\n  _proto.resetAfterId = function resetAfterId(id, shouldForceUpdate) {\n    var _this$list$current;\n\n    if (shouldForceUpdate === void 0) {\n      shouldForceUpdate = false;\n    }\n\n    (_this$list$current = this.list.current) == null ? void 0 : _this$list$current.resetAfterIndex(this.state.order.indexOf(id), shouldForceUpdate);\n  };\n\n  _proto.recomputeTree = function recomputeTree(options) {\n    var _this2 = this;\n\n    return _Tree.prototype.recomputeTree.call(this, options).then(function () {\n      if (options == null ? void 0 : options.useDefaultHeight) {\n        var _this2$list$current;\n\n        (_this2$list$current = _this2.list.current) == null ? void 0 : _this2$list$current.resetAfterIndex(0, true);\n      }\n    });\n  };\n\n  _proto.render = function render() {\n    var _this$props = this.props,\n        children = _this$props.children,\n        itemSize = _this$props.itemSize,\n        rowComponent = _this$props.rowComponent,\n        treeWalker = _this$props.treeWalker,\n        rest = objectWithoutPropertiesLoose_default()(_this$props, ["children", "itemSize", "rowComponent", "treeWalker"]);\n\n    return /*#__PURE__*/react_default.a.createElement(index_esm["b" /* VariableSizeList */], Object.assign({}, rest, {\n      itemData: this.state,\n      itemCount: this.state.order.length // eslint-disable-next-line @typescript-eslint/unbound-method\n      ,\n      itemSize: itemSize != null ? itemSize : this.getItemSize,\n      ref: this.list\n    }), rowComponent);\n  };\n\n  _proto.getItemSize = function getItemSize(index) {\n    var _this$state = this.state,\n        order = _this$state.order,\n        records = _this$state.records;\n    return records[order[index]].height;\n  };\n\n  return VariableSizeTree;\n}(src_Tree);\n// CONCATENATED MODULE: ./src/index.ts\n\n\n\n\n//# sourceURL=webpack:///./src/index.ts_+_4_modules?')},357:function(module,exports,__webpack_require__){eval("__webpack_require__(358);\n__webpack_require__(722);\nmodule.exports = __webpack_require__(723);\n\n\n//# sourceURL=webpack:///multi_./node_modules/@storybook/core/dist/server/common/polyfills.js_./node_modules/@storybook/core/dist/server/preview/globals.js_./.storybook/config.js?")},480:function(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack:///./util.inspect_(ignored)?")},723:function(module,exports,__webpack_require__){eval('/* WEBPACK VAR INJECTION */(function(module) {var _require=__webpack_require__(102),addParameters=_require.addParameters,configure=_require.configure;addParameters({options:{addonPanelInRight:!0,name:"React Virtualized Tree",selectedPanel:"knobs"}});configure(function(){return __webpack_require__(907)},module);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)(module)))\n\n//# sourceURL=webpack:///./.storybook/config.js?')},907:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FixedSizeTree_story__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);\n/* harmony import */ var _VariableSizeTree_story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(918);\n\n\n\n//# sourceURL=webpack:///./__stories__/index.ts?")},908:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(141);\n\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(treeWalker);\n\n\n\n\n\n\ndocument.body.style.margin = '0';\ndocument.body.style.display = 'flex';\ndocument.body.style.minHeight = '100%';\nvar root = document.getElementById('root');\nroot.style.margin = '10px 0 0 10px';\nroot.style.flex = '1';\nvar nodeId = 0;\n\nvar createNode = function createNode(depth) {\n  if (depth === void 0) {\n    depth = 0;\n  }\n\n  var node = {\n    children: [],\n    id: nodeId,\n    name: \"test-\" + nodeId\n  };\n  nodeId += 1;\n\n  if (depth === 5) {\n    return node;\n  }\n\n  for (var i = 0; i < 5; i++) {\n    node.children.push(createNode(depth + 1));\n  }\n\n  return node;\n};\n\nvar rootNode = createNode();\nvar defaultTextStyle = {\n  marginLeft: 10\n};\nvar defaultButtonStyle = {\n  fontFamily: 'Courier New'\n};\n\nfunction treeWalker(refresh) {\n  var stack, _ref, node, nestingLevel, id, isOpened, i;\n\n  return regeneratorRuntime.wrap(function treeWalker$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          stack = [];\n          stack.push({\n            nestingLevel: 0,\n            node: rootNode\n          });\n\n        case 2:\n          if (!(stack.length !== 0)) {\n            _context.next = 11;\n            break;\n          }\n\n          _ref = stack.pop(), node = _ref.node, nestingLevel = _ref.nestingLevel;\n          id = node.id.toString();\n          _context.next = 7;\n          return refresh ? {\n            id: id,\n            isLeaf: node.children.length === 0,\n            isOpenByDefault: true,\n            name: node.name,\n            nestingLevel: nestingLevel\n          } : id;\n\n        case 7:\n          isOpened = _context.sent;\n\n          if (node.children.length !== 0 && isOpened) {\n            for (i = node.children.length - 1; i >= 0; i--) {\n              stack.push({\n                nestingLevel: nestingLevel + 1,\n                node: node.children[i]\n              });\n            }\n          }\n\n          _context.next = 2;\n          break;\n\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\nvar Node = function Node(_ref2) {\n  var _ref2$data = _ref2.data,\n      isLeaf = _ref2$data.isLeaf,\n      name = _ref2$data.name,\n      nestingLevel = _ref2$data.nestingLevel,\n      isOpen = _ref2.isOpen,\n      style = _ref2.style,\n      toggle = _ref2.toggle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {\n      alignItems: 'center',\n      display: 'flex',\n      marginLeft: nestingLevel * 30 + (isLeaf ? 48 : 0)\n    })\n  }, !isLeaf && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: toggle,\n    style: defaultButtonStyle\n  }, isOpen ? '-' : '+')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    style: defaultTextStyle\n  }, name));\n};\n\nvar TreePresenter = function TreePresenter(_ref3) {\n  var itemSize = _ref3.itemSize;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    disableWidth: true\n  }, function (_ref4) {\n    var height = _ref4.height;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_5__[/* FixedSizeTree */ \"a\"], {\n      treeWalker: treeWalker,\n      itemSize: itemSize,\n      height: height,\n      width: \"100%\"\n    }, Node);\n  });\n};\n\nObject(_storybook_react__WEBPACK_IMPORTED_MODULE_2__[\"storiesOf\"])('Tree', module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__[\"withKnobs\"]).add('FixedSizeTree', function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TreePresenter, {\n    itemSize: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__[\"number\"])('Row height', 30)\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(356)(module)))\n\n//# sourceURL=webpack:///./__stories__/FixedSizeTree.story.tsx?")},918:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);\n/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);\n/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(141);\n\n\n\n\n\n\ndocument.body.style.margin = \'0\';\ndocument.body.style.display = \'flex\';\ndocument.body.style.minHeight = \'100vh\';\nvar root = document.getElementById(\'root\');\nroot.style.margin = \'10px 0 0 10px\';\nroot.style.flex = \'1\';\nvar nodeId = 0;\n\nvar createNode = function createNode(depth) {\n  if (depth === void 0) {\n    depth = 0;\n  }\n\n  var node = {\n    children: [],\n    id: nodeId,\n    name: "test-" + nodeId\n  };\n  nodeId += 1;\n\n  if (depth === 5) {\n    return node;\n  }\n\n  for (var i = 0; i < 5; i++) {\n    node.children.push(createNode(depth + 1));\n  }\n\n  return node;\n};\n\nvar rootNode = createNode();\nvar defaultGapStyle = {\n  marginLeft: 10\n};\nvar defaultButtonStyle = {\n  fontFamily: \'Courier New\'\n};\n\nvar Node = function Node(_ref) {\n  var height = _ref.height,\n      _ref$data = _ref.data,\n      isLeaf = _ref$data.isLeaf,\n      name = _ref$data.name,\n      nestingLevel = _ref$data.nestingLevel,\n      isOpen = _ref.isOpen,\n      resize = _ref.resize,\n      style = _ref.style,\n      toggle = _ref.toggle,\n      itemSize = _ref.treeData;\n  var canOpen = height <= itemSize;\n  var halfSize = itemSize / 2;\n  var toggleNodeSize = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {\n    return resize(canOpen ? height + halfSize : height - halfSize, true);\n  }, [height, resize]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {\n    style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {\n      alignItems: \'center\',\n      background: canOpen ? undefined : \'#ddd\',\n      display: \'flex\',\n      marginLeft: nestingLevel * 30 + (isLeaf ? 48 : 0)\n    })\n  }, !isLeaf && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {\n    type: "button",\n    onClick: toggle,\n    style: defaultButtonStyle\n  }, isOpen ? \'-\' : \'+\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {\n    style: defaultGapStyle\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {\n    type: "button",\n    onClick: toggleNodeSize,\n    style: defaultGapStyle\n  }, canOpen ? \'Open\' : \'Close\')));\n};\n\nvar TreePresenter = function TreePresenter(_ref2) {\n  var itemSize = _ref2.itemSize;\n  var tree = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);\n  var treeWalker = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/regeneratorRuntime.mark(function treeWalker(refresh) {\n    var stack, _ref3, node, nestingLevel, id, isOpened, i;\n\n    return regeneratorRuntime.wrap(function treeWalker$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            stack = [];\n            stack.push({\n              nestingLevel: 0,\n              node: rootNode\n            });\n\n          case 2:\n            if (!(stack.length !== 0)) {\n              _context.next = 11;\n              break;\n            }\n\n            _ref3 = stack.pop(), node = _ref3.node, nestingLevel = _ref3.nestingLevel;\n            id = node.id.toString();\n            _context.next = 7;\n            return refresh ? {\n              defaultHeight: itemSize,\n              id: id,\n              isLeaf: node.children.length === 0,\n              isOpenByDefault: true,\n              name: node.name,\n              nestingLevel: nestingLevel\n            } : id;\n\n          case 7:\n            isOpened = _context.sent;\n\n            if (node.children.length !== 0 && isOpened) {\n              for (i = node.children.length - 1; i >= 0; i--) {\n                stack.push({\n                  nestingLevel: nestingLevel + 1,\n                  node: node.children[i]\n                });\n              }\n            }\n\n            _context.next = 2;\n            break;\n\n          case 11:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, treeWalker);\n  }), [itemSize]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {\n    var _tree$current;\n\n    // eslint-disable-next-line @typescript-eslint/no-floating-promises\n    (_tree$current = tree.current) == null ? void 0 : _tree$current.recomputeTree({\n      refreshNodes: true,\n      useDefaultHeight: true\n    });\n  }, [itemSize]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    disableWidth: true\n  }, function (_ref4) {\n    var height = _ref4.height;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_5__[/* VariableSizeTree */ "b"], {\n      ref: tree,\n      itemData: itemSize,\n      treeWalker: treeWalker,\n      height: height,\n      width: "100%"\n    }, Node);\n  });\n};\n\nObject(_storybook_react__WEBPACK_IMPORTED_MODULE_2__["storiesOf"])(\'Tree\', module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["withKnobs"]).add(\'VariableSizeTree\', function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TreePresenter, {\n    itemSize: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["number"])(\'Default row height\', 30)\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(356)(module)))\n\n//# sourceURL=webpack:///./__stories__/VariableSizeTree.story.tsx?')}},[[357,1,2]]]);