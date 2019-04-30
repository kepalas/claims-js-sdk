"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var TC = require("./typechain-runtime");
var MonethaClaimHandler = /** @class */ (function (_super) {
    tslib_1.__extends(MonethaClaimHandler, _super);
    function MonethaClaimHandler(web3, address) {
        var _this = this;
        var abi = [
            {
                constant: false,
                inputs: [{ name: "_token", type: "address" }],
                name: "reclaimToken",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_to", type: "address" },
                    { name: "_value", type: "uint256" }
                ],
                name: "reclaimEtherTo",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "isMonethaAddress",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "minStake",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [],
                name: "unpause",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "paused",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [],
                name: "pause",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "owner",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [],
                name: "reclaimEther",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_token", type: "address" },
                    { name: "_to", type: "address" },
                    { name: "_value", type: "uint256" }
                ],
                name: "reclaimTokenTo",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "uint256" }],
                name: "claims",
                outputs: [
                    { name: "state", type: "uint8" },
                    { name: "modified", type: "uint256" },
                    { name: "dealId", type: "uint256" },
                    { name: "dealHash", type: "bytes32" },
                    { name: "reasonNote", type: "string" },
                    { name: "requesterId", type: "bytes32" },
                    { name: "requesterAddress", type: "address" },
                    { name: "requesterStaked", type: "uint256" },
                    { name: "respondentId", type: "bytes32" },
                    { name: "respondentAddress", type: "address" },
                    { name: "respondentStaked", type: "uint256" },
                    { name: "resolutionNote", type: "string" }
                ],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_address", type: "address" },
                    { name: "_isMonethaAddress", type: "bool" }
                ],
                name: "setMonethaAddress",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newOwner", type: "address" }],
                name: "transferOwnership",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "token",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                inputs: [
                    { name: "_token", type: "address" },
                    { name: "_minStake", type: "uint256" }
                ],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: false, name: "previousMinStake", type: "uint256" },
                    { indexed: false, name: "newMinStake", type: "uint256" }
                ],
                name: "MinStakeUpdated",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "dealId", type: "uint256" },
                    { indexed: true, name: "claimIdx", type: "uint256" }
                ],
                name: "ClaimCreated",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "dealId", type: "uint256" },
                    { indexed: true, name: "claimIdx", type: "uint256" }
                ],
                name: "ClaimAccepted",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "dealId", type: "uint256" },
                    { indexed: true, name: "claimIdx", type: "uint256" }
                ],
                name: "ClaimResolved",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "dealId", type: "uint256" },
                    { indexed: true, name: "claimIdx", type: "uint256" }
                ],
                name: "ClaimClosedAfterAcceptanceExpired",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "dealId", type: "uint256" },
                    { indexed: true, name: "claimIdx", type: "uint256" }
                ],
                name: "ClaimClosedAfterResolutionExpired",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "dealId", type: "uint256" },
                    { indexed: true, name: "claimIdx", type: "uint256" }
                ],
                name: "ClaimClosedAfterConfirmationExpired",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "dealId", type: "uint256" },
                    { indexed: true, name: "claimIdx", type: "uint256" }
                ],
                name: "ClaimClosed",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "to", type: "address" },
                    { indexed: false, name: "amount", type: "uint256" }
                ],
                name: "ReclaimTokens",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "to", type: "address" },
                    { indexed: false, name: "amount", type: "uint256" }
                ],
                name: "ReclaimEther",
                type: "event"
            },
            { anonymous: false, inputs: [], name: "Pause", type: "event" },
            { anonymous: false, inputs: [], name: "Unpause", type: "event" },
            {
                anonymous: false,
                inputs: [
                    { indexed: false, name: "_address", type: "address" },
                    { indexed: false, name: "_isMonethaAddress", type: "bool" }
                ],
                name: "MonethaAddressSet",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [{ indexed: true, name: "previousOwner", type: "address" }],
                name: "OwnershipRenounced",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "previousOwner", type: "address" },
                    { indexed: true, name: "newOwner", type: "address" }
                ],
                name: "OwnershipTransferred",
                type: "event"
            },
            {
                constant: false,
                inputs: [{ name: "_newMinStake", type: "uint256" }],
                name: "setMinStake",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "getClaimsCount",
                outputs: [{ name: "count", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_dealId", type: "uint256" },
                    { name: "_dealHash", type: "bytes32" },
                    { name: "_reasonNote", type: "string" },
                    { name: "_requesterId", type: "bytes32" },
                    { name: "_respondentId", type: "bytes32" },
                    { name: "_amountToStake", type: "uint256" }
                ],
                name: "create",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_claimIdx", type: "uint256" }],
                name: "accept",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_claimIdx", type: "uint256" },
                    { name: "_resolutionNote", type: "string" }
                ],
                name: "resolve",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_claimIdx", type: "uint256" }],
                name: "close",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            }
        ];
        _this = _super.call(this, web3, address, abi) || this;
        return _this;
    }
    MonethaClaimHandler.createAndValidate = function (web3, address) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contract, code;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new MonethaClaimHandler(web3, address);
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
    Object.defineProperty(MonethaClaimHandler.prototype, "minStake", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.minStake, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaClaimHandler.prototype, "paused", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.paused, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaClaimHandler.prototype, "owner", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.owner, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaClaimHandler.prototype, "token", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.token, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonethaClaimHandler.prototype, "getClaimsCount", {
        get: function () {
            return TC.promisify(this.rawWeb3Contract.getClaimsCount, []);
        },
        enumerable: true,
        configurable: true
    });
    MonethaClaimHandler.prototype.isMonethaAddress = function (arg0) {
        return TC.promisify(this.rawWeb3Contract.isMonethaAddress, [
            arg0.toString()
        ]);
    };
    MonethaClaimHandler.prototype.claims = function (arg0) {
        return TC.promisify(this.rawWeb3Contract.claims, [arg0.toString()]);
    };
    MonethaClaimHandler.prototype.reclaimTokenTx = function (_token) {
        return new TC.DeferredTransactionWrapper(this, "reclaimToken", [_token.toString()]);
    };
    MonethaClaimHandler.prototype.reclaimEtherToTx = function (_to, _value) {
        return new TC.DeferredTransactionWrapper(this, "reclaimEtherTo", [_to.toString(), _value.toString()]);
    };
    MonethaClaimHandler.prototype.unpauseTx = function () {
        return new TC.DeferredTransactionWrapper(this, "unpause", []);
    };
    MonethaClaimHandler.prototype.renounceOwnershipTx = function () {
        return new TC.DeferredTransactionWrapper(this, "renounceOwnership", []);
    };
    MonethaClaimHandler.prototype.pauseTx = function () {
        return new TC.DeferredTransactionWrapper(this, "pause", []);
    };
    MonethaClaimHandler.prototype.reclaimEtherTx = function () {
        return new TC.DeferredTransactionWrapper(this, "reclaimEther", []);
    };
    MonethaClaimHandler.prototype.reclaimTokenToTx = function (_token, _to, _value) {
        return new TC.DeferredTransactionWrapper(this, "reclaimTokenTo", [_token.toString(), _to.toString(), _value.toString()]);
    };
    MonethaClaimHandler.prototype.setMonethaAddressTx = function (_address, _isMonethaAddress) {
        return new TC.DeferredTransactionWrapper(this, "setMonethaAddress", [_address.toString(), _isMonethaAddress]);
    };
    MonethaClaimHandler.prototype.transferOwnershipTx = function (_newOwner) {
        return new TC.DeferredTransactionWrapper(this, "transferOwnership", [_newOwner.toString()]);
    };
    MonethaClaimHandler.prototype.setMinStakeTx = function (_newMinStake) {
        return new TC.DeferredTransactionWrapper(this, "setMinStake", [_newMinStake.toString()]);
    };
    MonethaClaimHandler.prototype.createTx = function (_dealId, _dealHash, _reasonNote, _requesterId, _respondentId, _amountToStake) {
        return new TC.DeferredTransactionWrapper(this, "create", [
            _dealId.toString(),
            _dealHash.toString(),
            _reasonNote.toString(),
            _requesterId.toString(),
            _respondentId.toString(),
            _amountToStake.toString()
        ]);
    };
    MonethaClaimHandler.prototype.acceptTx = function (_claimIdx) {
        return new TC.DeferredTransactionWrapper(this, "accept", [
            _claimIdx.toString()
        ]);
    };
    MonethaClaimHandler.prototype.resolveTx = function (_claimIdx, _resolutionNote) {
        return new TC.DeferredTransactionWrapper(this, "resolve", [
            _claimIdx.toString(),
            _resolutionNote.toString()
        ]);
    };
    MonethaClaimHandler.prototype.closeTx = function (_claimIdx) {
        return new TC.DeferredTransactionWrapper(this, "close", [
            _claimIdx.toString()
        ]);
    };
    MonethaClaimHandler.prototype.MinStakeUpdatedEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "MinStakeUpdated", eventFilter);
    };
    MonethaClaimHandler.prototype.ClaimCreatedEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ClaimCreated", eventFilter);
    };
    MonethaClaimHandler.prototype.ClaimAcceptedEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ClaimAccepted", eventFilter);
    };
    MonethaClaimHandler.prototype.ClaimResolvedEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ClaimResolved", eventFilter);
    };
    MonethaClaimHandler.prototype.ClaimClosedAfterAcceptanceExpiredEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ClaimClosedAfterAcceptanceExpired", eventFilter);
    };
    MonethaClaimHandler.prototype.ClaimClosedAfterResolutionExpiredEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ClaimClosedAfterResolutionExpired", eventFilter);
    };
    MonethaClaimHandler.prototype.ClaimClosedAfterConfirmationExpiredEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ClaimClosedAfterConfirmationExpired", eventFilter);
    };
    MonethaClaimHandler.prototype.ClaimClosedEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ClaimClosed", eventFilter);
    };
    MonethaClaimHandler.prototype.ReclaimTokensEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ReclaimTokens", eventFilter);
    };
    MonethaClaimHandler.prototype.ReclaimEtherEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "ReclaimEther", eventFilter);
    };
    MonethaClaimHandler.prototype.PauseEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "Pause", eventFilter);
    };
    MonethaClaimHandler.prototype.UnpauseEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "Unpause", eventFilter);
    };
    MonethaClaimHandler.prototype.MonethaAddressSetEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "MonethaAddressSet", eventFilter);
    };
    MonethaClaimHandler.prototype.OwnershipRenouncedEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "OwnershipRenounced", eventFilter);
    };
    MonethaClaimHandler.prototype.OwnershipTransferredEvent = function (eventFilter) {
        return new TC.DeferredEventWrapper(this, "OwnershipTransferred", eventFilter);
    };
    return MonethaClaimHandler;
}(TC.TypeChainContract));
exports.MonethaClaimHandler = MonethaClaimHandler;