(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{661:function(t,a,e){"use strict";e.r(a);var o=e(1),s=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"truffle-deploying-a-smart-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#truffle-deploying-a-smart-contract"}},[t._v("#")]),t._v(" Truffle: Deploying a Smart Contract")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v("Learn how to deploy a simple Solidity-based smart contract to Haqq using the Truffle environment")]),t._v(" "),e("h2",{attrs:{id:"pre-requisite-readings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[t._v("#")]),t._v(" Pre-requisite Readings")]),t._v(" "),e("ul",[e("li",{attrs:{prereq:""}},[e("RouterLink",{attrs:{to:"/quickstart/installation.html"}},[t._v("Installation")])],1),t._v(" "),e("li",{attrs:{prereq:""}},[e("RouterLink",{attrs:{to:"/quickstart/run_node.html"}},[t._v("Run a node")])],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.trufflesuite.com/truffle",target:"_blank",rel:"noopener noreferrer"}},[t._v("Truffle"),e("OutboundLink")],1),t._v(" is a development framework for deploying and managing "),e("a",{attrs:{href:"https://github.com/ethereum/solidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solidity"),e("OutboundLink")],1),t._v(" smart contracts.")]),t._v(" "),e("h2",{attrs:{id:"install-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install Dependencies")]),t._v(" "),e("p",[t._v("First, install the latest Truffle version on your machine globally.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"eWFybiBpbnN0YWxsIHRydWZmbGUgLWcK"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("If you haven't already, you will also need to install Haqq if you plan on deploying your smart contracts locally. Check this "),e("RouterLink",{attrs:{to:"/quickstart/installation.html"}},[t._v("document")]),t._v(" for the full instructions.")],1)]),t._v(" "),e("h2",{attrs:{id:"create-truffle-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-truffle-project"}},[t._v("#")]),t._v(" Create Truffle Project")]),t._v(" "),e("p",[t._v("In this step we will create a simple counter contract. Feel free to skip this step if you already have your own compiled contract.")]),t._v(" "),e("p",[t._v("Create a new directory to host the contracts and initialize it:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"console",base64:"bWtkaXIgaGFxcS10cnVmZmxlCmNkIGhhcXEtdHJ1ZmZsZQo="}}),t._v(" "),e("p",[t._v("Initialize the Truffle suite with:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dHJ1ZmZsZSBpbml0Cg=="}}),t._v(" "),e("p",[t._v("Create "),e("code",[t._v("contracts/Counter.sol")]),t._v(" containing the following contract:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"cHJhZ21hIHNvbGlkaXR5ICZndDs9MC43LjAgJmx0OzAuOS4wOwoKY29udHJhY3QgQ291bnRlciB7CiAgdWludDI1NiBjb3VudGVyID0gMDsKCiAgZnVuY3Rpb24gYWRkKCkgcHVibGljIHsKICAgIGNvdW50ZXIrKzsKICB9CgogIGZ1bmN0aW9uIHN1YnRyYWN0KCkgcHVibGljIHsKICAgIGNvdW50ZXItLTsKICB9CgogIGZ1bmN0aW9uIGdldENvdW50ZXIoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICByZXR1cm4gY291bnRlcjsKICB9Cn0K"}}),t._v(" "),e("p",[t._v("Compile the contract using the "),e("code",[t._v("compile")]),t._v(" command:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dHJ1ZmZsZSBjb21waWxlCg=="}}),t._v(" "),e("p",[t._v("Create "),e("code",[t._v("test/counter_test.js")]),t._v(" containing the following tests in Javascript using "),e("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mocha"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgQ291bnRlciA9IGFydGlmYWN0cy5yZXF1aXJlKCZxdW90O0NvdW50ZXImcXVvdDspCgpjb250cmFjdCgnQ291bnRlcicsIGFjY291bnRzID0mZ3Q7IHsKICBjb25zdCBmcm9tID0gYWNjb3VudHNbMF0KICBsZXQgY291bnRlcgoKICBiZWZvcmUoYXN5bmMoKSA9Jmd0OyB7CiAgICBjb3VudGVyID0gYXdhaXQgQ291bnRlci5uZXcoKQogIH0pCgogIGl0KCdzaG91bGQgYWRkJywgYXN5bmMoKSA9Jmd0OyB7CiAgICBhd2FpdCBjb3VudGVyLmFkZCgpCiAgICBsZXQgY291bnQgPSBhd2FpdCBjb3VudGVyLmdldENvdW50ZXIoKQogICAgYXNzZXJ0KGNvdW50ID09IDEsIGBjb3VudCB3YXMgJHtjb3VudH1gKQogIH0pCn0pCg=="}}),t._v(" "),e("h2",{attrs:{id:"truffle-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#truffle-configuration"}},[t._v("#")]),t._v(" Truffle configuration")]),t._v(" "),e("p",[t._v("Open "),e("code",[t._v("truffle-config.js")]),t._v(" and uncomment the "),e("code",[t._v("development")]),t._v(" section in "),e("code",[t._v("networks")]),t._v(":")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"ICAgIGRldmVsb3BtZW50OiB7CiAgICAgIGhvc3Q6ICZxdW90OzEyNy4wLjAuMSZxdW90OywgICAgIC8vIExvY2FsaG9zdCAoZGVmYXVsdDogbm9uZSkKICAgICAgcG9ydDogODU0NSwgICAgICAgICAgICAvLyBTdGFuZGFyZCBFdGhlcmV1bSBwb3J0IChkZWZhdWx0OiBub25lKQogICAgICBuZXR3b3JrX2lkOiAmcXVvdDsqJnF1b3Q7LCAgICAgICAvLyBBbnkgbmV0d29yayAoZGVmYXVsdDogbm9uZSkKICAgIH0sCg=="}}),t._v(" "),e("p",[t._v("This will allow your contract to connect to your Haqq local node.")]),t._v(" "),e("h2",{attrs:{id:"start-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-node"}},[t._v("#")]),t._v(" Start Node")]),t._v(" "),e("p",[t._v("Start your local node using the following command on the Terminal")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBmcm9tIHRoZSB+L2hhcXEvIGRpcmVjdG9yeQokIGluaXQuc2gK"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("For further information on how to run a node, please refer to the "),e("RouterLink",{attrs:{to:"/quickstart/run_node.html"}},[t._v("quickstart guide")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"deploy-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-contract"}},[t._v("#")]),t._v(" Deploy contract")]),t._v(" "),e("p",[t._v("In the Truffle terminal, migrate the contract using:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dHJ1ZmZsZSBtaWdyYXRlIC0tbmV0d29yayBkZXZlbG9wbWVudAo="}}),t._v(" "),e("p",[t._v("You should see incoming deployment logs in the Haqq daemon Terminal tab for each transaction (one to deploy "),e("code",[t._v("Migrations.sol")]),t._v(" and the other to deploy "),e("code",[t._v("Counter.sol")]),t._v(").")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBJWzIwMjAtMDctMTV8MTc6MzU6NTkuOTM0XSBBZGRlZCBnb29kIHRyYW5zYWN0aW9uICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWVtcG9vbCB0eD0yMjI0NUI5MzU2ODk5MThEMzMyRjU4RTgyNjkwRjAyMDczRjA0NTNENTRENTk0NEI2RDY0QUFGMUYyMTk3NEUyIHJlcz0mcXVvdDsmYW1wO3tDaGVja1R4OmxvZzpcJnF1b3Q7W11cJnF1b3Q7IGdhc193YW50ZWQ6NjcyMTk3NSB9JnF1b3Q7IGhlaWdodD0zIHRvdGFsPTEKSVsyMDIwLTA3LTE1fDE3OjM2OjAyLjA2NV0gRXhlY3V0ZWQgYmxvY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD00IHZhbGlkVHhzPTEgaW52YWxpZFR4cz0wCklbMjAyMC0wNy0xNXwxNzozNjowMi4wNjhdIENvbW1pdHRlZCBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9NCB0eHM9MSBhcHBIYXNoPTc2QkE4NTM2NUYxMEE1OUZFMjRBRENBODc1NDQxOTFDMkQ3MkI5RkI1NjMwNDY2QzVCNzFFODc4RjlDMEExMTEKSVsyMDIwLTA3LTE1fDE3OjM2OjAyLjk4MV0gQWRkZWQgZ29vZCB0cmFuc2FjdGlvbiAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPW1lbXBvb2wgdHg9ODQ1MTZCNDU4OENCQjIxRTZENTYyQTZBMjk1RjFGODg3NjA3NkEwQ0ZGMkVGMUIwRUM2NzBBRDhEOEJCNTQyNSByZXM9JnF1b3Q7JmFtcDt7Q2hlY2tUeDpsb2c6XCZxdW90O1tdXCZxdW90OyBnYXNfd2FudGVkOjY3MjE5NzUgfSZxdW90OyBoZWlnaHQ9NCB0b3RhbD0xCg=="}}),t._v(" "),e("h2",{attrs:{id:"run-truffle-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-truffle-tests"}},[t._v("#")]),t._v(" Run Truffle tests")]),t._v(" "),e("p",[t._v("Now, you can run the Truffle tests using the Haqq node using the "),e("code",[t._v("test")]),t._v(" command:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCB0cnVmZmxlIHRlc3QgLS1uZXR3b3JrIGRldmVsb3BtZW50CgpVc2luZyBuZXR3b3JrICdkZXZlbG9wbWVudCcuCgoKQ29tcGlsaW5nIHlvdXIgY29udHJhY3RzLi4uCj09PT09PT09PT09PT09PT09PT09PT09PT09PQomZ3Q7IEV2ZXJ5dGhpbmcgaXMgdXAgdG8gZGF0ZSwgdGhlcmUgaXMgbm90aGluZyB0byBjb21waWxlLgoKCgogIENvbnRyYWN0OiBDb3VudGVyCiAgICDinJMgc2hvdWxkIGFkZCAoNTAzNm1zKQoKCiAgMSBwYXNzaW5nICgxMHMpCg=="}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);