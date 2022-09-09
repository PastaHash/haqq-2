(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{714:function(t,e,a){"use strict";a.r(e);var o=a(1),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"evm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evm"}},[t._v("#")]),t._v(" "),a("code",[t._v("evm")])]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("This document defines the specification of the Ethereum Virtual Machine (EVM) as a Cosmos SDK module.")]),t._v(" "),a("p",[t._v("Since the introduction of Ethereum in 2015, the ability to control digital assets through "),a("a",{attrs:{href:"https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/idea.html",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("smart contracts")]),a("OutboundLink")],1),t._v(" has attracted a large community of developers to build decentralized applications on the Ethereum Virtual Machine (EVM). This community is continuously creating extensive tooling and introducing standards, which are further increasing the adoption rate of EVM compatible technology.")]),t._v(" "),a("p",[t._v("The growth of EVM-based chains (e.g. Ethereum), however, has uncovered several scalability challenges that are often referred to as the "),a("a",{attrs:{href:"https://vitalik.ca/general/2021/04/07/sharding.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trilemma of decentralization, security, and scalability"),a("OutboundLink")],1),t._v(". Developers are frustrated by high gas fees, slow transaction speed & throughput, and chain-specific governance that can only undergo slow change because of its wide range of deployed applications. A solution is required that eliminates these concerns for developers, who build applications within a familiar EVM environment.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("x/evm")]),t._v(" module provides this EVM familiarity on a scalable, high-throughput Proof-of-Stake blockchain. It is built as a "),a("a",{attrs:{href:"https://docs.cosmos.network/master/building-modules/intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos SDK module"),a("OutboundLink")],1),t._v(" which allows for the deployment of smart contracts, interaction with the EVM state machine (state transitions), and the use of EVM tooling. It can be used on Cosmos application-specific blockchains, which alleviate the aforementioned concerns through high transaction throughput via "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint Core"),a("OutboundLink")],1),t._v(", fast transaction finality, and horizontal scalability via "),a("a",{attrs:{href:"https://ibcprotocol.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IBC"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("x/evm")]),t._v(" is part of the "),a("a",{attrs:{href:"https://pkg.go.dev/github.com/evmos/ethermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ethermint library"),a("OutboundLink")],1),t._v(". For an example of how Ethermint can be used on any Cosmos-SDK chain, please refer to "),a("a",{attrs:{href:"https://www.github.com/tharsis/evmos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Evmos"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ol",[a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/01_concepts.html"}},[t._v("Concepts")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/02_state.html"}},[t._v("State")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/03_state_transitions.html"}},[t._v("State Transitions")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/04_transactions.html"}},[t._v("Transactions")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/05_abci.html"}},[t._v("ABCI")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/05_hooks.html"}},[t._v("Hooks")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/06_events.html"}},[t._v("Events")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/07_params.html"}},[t._v("Parameters")])],1)]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/evm/07_client.html"}},[t._v("Client")])],1)])]),t._v(" "),a("h2",{attrs:{id:"module-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-architecture"}},[t._v("#")]),t._v(" Module Architecture")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("NOTE:")]),t._v(": If you're not familiar with the overall module structure from\nthe SDK modules, please check this "),a("a",{attrs:{href:"https://docs.cosmos.network/master/building-modules/structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("document"),a("OutboundLink")],1),t._v(" as\nprerequisite reading.")])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXZtLwrilJzilIDilIAgY2xpZW50CuKUgiAgIOKUlOKUgOKUgCBjbGkK4pSCICAgICAgIOKUnOKUgOKUgCBxdWVyeS5nbyAgICAgICMgQ0xJIHF1ZXJ5IGNvbW1hbmRzIGZvciB0aGUgbW9kdWxlCuKUgiAgICDCoMKgIOKUlOKUgOKUgCB0eC5nbyAgICAgICAgICMgQ0xJIHRyYW5zYWN0aW9uIGNvbW1hbmRzIGZvciB0aGUgbW9kdWxlCuKUnOKUgOKUgCBrZWVwZXIK4pSCICAg4pSc4pSA4pSAIGtlZXBlci5nbyAgICAgICAgICMgQUJDSSBCZWdpbkJsb2NrIGFuZCBFbmRCbG9jayBsb2dpYwrilIIgICDilJzilIDilIAga2VlcGVyLmdvICAgICAgICAgIyBTdG9yZSBrZWVwZXIgdGhhdCBoYW5kbGVzIHRoZSBidXNpbmVzcyBsb2dpYyBvZiB0aGUgbW9kdWxlIGFuZCBoYXMgYWNjZXNzIHRvIGEgc3BlY2lmaWMgc3VidHJlZSBvZiB0aGUgc3RhdGUgdHJlZS4K4pSCICAg4pSc4pSA4pSAIHBhcmFtcy5nbyAgICAgICAgICMgUGFyYW1ldGVyIGdldHRlciBhbmQgc2V0dGVyCuKUgiAgIOKUnOKUgOKUgCBxdWVyaWVyLmdvICAgICAgICAjIFN0YXRlIHF1ZXJ5IGZ1bmN0aW9ucwrilIIgICDilJTilIDilIAgc3RhdGVkYi5nbyAgICAgICAgIyBGdW5jdGlvbnMgZnJvbSB0eXBlcy9zdGF0ZWRiIHdpdGggYSBwYXNzZWQgaW4gc2RrLkNvbnRleHQK4pSc4pSA4pSAIHR5cGVzCuKUgsKgwqAg4pSc4pSA4pSAIGNoYWluX2NvbmZpZy5nbwrilILCoMKgIOKUnOKUgOKUgCBjb2RlYy5nbyAgICAgICAgICAjIFR5cGUgcmVnaXN0cmF0aW9uIGZvciBlbmNvZGluZwrilILCoMKgIOKUnOKUgOKUgCBlcnJvcnMuZ28gICAgICAgICAjIE1vZHVsZS1zcGVjaWZpYyBlcnJvcnMK4pSCwqDCoCDilJzilIDilIAgZXZlbnRzLmdvICAgICAgICAgIyBFdmVudHMgZXhwb3NlZCB0byB0aGUgVGVuZGVybWludCBQdWJTdWIvV2Vic29ja2V0CuKUgsKgwqAg4pSc4pSA4pSAIGdlbmVzaXMuZ28gICAgICAgICMgR2VuZXNpcyBzdGF0ZSBmb3IgdGhlIG1vZHVsZQrilILCoMKgIOKUnOKUgOKUgCBqb3VybmFsLmdvICAgICAgICAjIEV0aGVyZXVtIEpvdXJuYWwgb2Ygc3RhdGUgdHJhbnNpdGlvbnMK4pSCwqDCoCDilJzilIDilIAga2V5cy5nbyAgICAgICAgICAgIyBTdG9yZSBrZXlzIGFuZCB1dGlsaXR5IGZ1bmN0aW9ucwrilILCoMKgIOKUnOKUgOKUgCBsb2dzLmdvICAgICAgICAgICAjIFR5cGVzIGZvciBwZXJzaXN0aW5nIEV0aGVyZXVtIHR4IGxvZ3Mgb24gc3RhdGUgYWZ0ZXIgY2hhaW4gdXBncmFkZXMK4pSCwqDCoCDilJzilIDilIAgbXNnLmdvICAgICAgICAgICAgIyBFVk0gbW9kdWxlIHRyYW5zYWN0aW9uIG1lc3NhZ2VzCuKUgsKgwqAg4pSc4pSA4pSAIHBhcmFtcy5nbyAgICAgICAgICMgTW9kdWxlIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgY3VzdG9taXplZCB3aXRoIGdvdmVybmFuY2UgcGFyYW1ldGVyIGNoYW5nZSBwcm9wb3NhbHMK4pSCwqDCoCDilJzilIDilIAgc3RhdGVfb2JqZWN0LmdvICAgIyBFVk0gc3RhdGUgb2JqZWN0CuKUgsKgwqAg4pSc4pSA4pSAIHN0YXRlZGIuZ28gICAgICAgICMgSW1wbGVtZW50YXRpb24gb2YgdGhlIFN0YXRlRGIgaW50ZXJmYWNlCuKUgsKgwqAg4pSc4pSA4pSAIHN0b3JhZ2UuZ28gICAgICAgICMgSW1wbGVtZW50YXRpb24gb2YgdGhlIEV0aGVyZXVtIHN0YXRlIHN0b3JhZ2UgbWFwIHVzaW5nIGFycmF5cyB0byBwcmV2ZW50IG5vbi1kZXRlcm1pbmlzbQrilILCoMKgIOKUlOKUgOKUgCB0eF9kYXRhLmdvICAgICAgICAjIEV0aGVyZXVtIHRyYW5zYWN0aW9uIGRhdGEgdHlwZXMK4pSc4pSA4pSAIGdlbmVzaXMuZ28gICAgICAgICAgICAjIEFCQ0kgSW5pdEdlbmVzaXMgYW5kIEV4cG9ydEdlbmVzaXMgZnVuY3Rpb25hbGl0eQrilJzilIDilIAgaGFuZGxlci5nbyAgICAgICAgICAgICMgTWVzc2FnZSByb3V0aW5nCuKUlOKUgOKUgCBtb2R1bGUuZ28gICAgICAgICAgICAgIyBNb2R1bGUgc2V0dXAgZm9yIHRoZSBtb2R1bGUgbWFuYWdlcgo="}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);