"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var TC = require("./typechain-runtime");
var MonethaToken = /** @class */ (function (_super) {
    tslib_1.__extends(MonethaToken, _super);
    function MonethaToken(web3, address) {
        var _this = this;
        var abi = [
            {
                constant: true,
                inputs: [],
                name: "name",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_spender", type: "address" },
                    { name: "_value", type: "uint256" }
                ],
                name: "approve",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "totalSupply",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_from", type: "address" },
                    { name: "_to", type: "address" },
                    { name: "_value", type: "uint256" }
                ],
                name: "transferFrom",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "decimals",
                outputs: [{ name: "", type: "uint8" }],
                payable: false,
                type: "function"
            },
            {
                constant: false,
                inputs: [],
                name: "burn",
                outputs: [],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "standard",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "ico",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "lockedAmount",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "balanceOf",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "startTime",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "tokensForIco",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "owner",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "symbol",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_to", type: "address" },
                    { name: "_value", type: "uint256" }
                ],
                name: "transfer",
                outputs: [{ name: "success", type: "bool" }],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "lockReleaseDate",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_icoAddress", type: "address" }],
                name: "setICO",
                outputs: [],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }, { name: "", type: "address" }],
                name: "allowance",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newStart", type: "uint256" }],
                name: "setStart",
                outputs: [],
                payable: false,
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "reservedAmount",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                type: "function"
            },
            {
                inputs: [
                    { name: "_ownerAddr", type: "address" },
                    { name: "_startTime", type: "uint256" }
                ],
                payable: false,
                type: "constructor"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "from", type: "address" },
                    { indexed: true, name: "to", type: "address" },
                    { indexed: false, name: "value", type: "uint256" }
                ],
                name: "Transfer",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "_owner", type: "address" },
                    { indexed: true, name: "spender", type: "address" },
                    { indexed: false, name: "value", type: "uint256" }
                ],
                name: "Approval",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [{ indexed: false, name: "amount", type: "uint256" }],
                name: "Burned",
                type: "event"
            }
        ];
        _this = _super.call(this, web3, address, abi) || this;
        return _this;
    }
    MonethaToken.createAndValidate = function (web3, address) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contract, code;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new MonethaToken(web3, address);
                        return [4 /*yield*/, TC.promisify(web3.eth.getCode, [address])];
                    case 1:
                        code = _a.sent();
                        // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
                        // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
                        if (code.length < 4) {
                            throw new Error("Contract at " + address + " doesn't exist!");
                        }
                        return [2 /*return*/, contract];
                }
            });
        });
    };
    Object.defineProperty(MonethaToken.prototype, "name", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.name, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "totalSupply", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.totalSupply, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "decimals", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.decimals, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "standard", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.standard, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "ico", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.ico, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "lockedAmount", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.lockedAmount, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "startTime", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.startTime, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "tokensForIco", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.tokensForIco, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "owner", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.owner, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "symbol", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.symbol, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "lockReleaseDate", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.lockReleaseDate, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaToken.prototype, "reservedAmount", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.reservedAmount, []);
        },
        enumerable: true,
        configurable: true
    });
    MonethaToken.prototype.balanceOf = function (arg0) {
        return TC.promisify(this.rawWeb3Contract.balanceOf, [arg0.toString()]);
    };
    MonethaToken.prototype.allowance = function (arg0, arg1) {
        return TC.promisify(this.rawWeb3Contract.allowance, [
            arg0.toString(),
            arg1.toString()
        ]);
    };
    MonethaToken.prototype.approveTx = function (_spender, _value) {
        return new TC.DeferredTransactionWrapper(this, "approve", [
            _spender.toString(),
            _value.toString()
        ]);
    };
    MonethaToken.prototype.transferFromTx = function (_from, _to, _value) {
        return new TC.DeferredTransactionWrapper(this, "transferFrom", [_from.toString(), _to.toString(), _value.toString()]);
    };
    MonethaToken.prototype.burnTx = function () {
        return new TC.DeferredTransactionWrapper(this, "burn", []);
    };
    MonethaToken.prototype.transferTx = function (_to, _value) {
        return new TC.DeferredTransactionWrapper(this, "transfer", [
            _to.toString(),
            _value.toString()
        ]);
    };
    MonethaToken.prototype.setICOTx = function (_icoAddress) {
        return new TC.DeferredTransactionWrapper(this, "setICO", [
            _icoAddress.toString()
        ]);
    };
    MonethaToken.prototype.setStartTx = function (_newStart) {
        return new TC.DeferredTransactionWrapper(this, "setStart", [
            _newStart.toString()
        ]);
    };
    MonethaToken.prototype.TransferEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "Transfer", eventFilter);
    };
    MonethaToken.prototype.ApprovalEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "Approval", eventFilter);
    };
    MonethaToken.prototype.BurnedEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "Burned", eventFilter);
    };
    return MonethaToken;
}(TC.TypeChainContract));
exports.MonethaToken = MonethaToken;
