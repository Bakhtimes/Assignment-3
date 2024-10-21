const contractAddress = "0xf90a478Bf0dEA9e3a7A64aB541a3f617006324E2"; // Replace with your contract address from Ganache
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "renter",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "amountPaid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "task",
            "type": "string"
          }
        ],
        "indexed": false,
        "internalType": "struct ResourceSharing.Rental",
        "name": "rental",
        "type": "tuple"
      }
    ],
    "name": "RentalCalled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "provider",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "CPUMHz",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "TFLOPS",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "GBs",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "pricePerHour",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isAvailable",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "totalRating",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ratingCount",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct ResourceSharing.Resource",
        "name": "rental",
        "type": "tuple"
      }
    ],
    "name": "ResourceCalled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "resourceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "provider",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "pricePerHour",
        "type": "uint256"
      }
    ],
    "name": "ResourceListed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "resourceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "rater",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "rating",
        "type": "uint8"
      }
    ],
    "name": "ResourceRated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "resourceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "renter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountPaid",
        "type": "uint256"
      }
    ],
    "name": "ResourceRented",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "rentals",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "renter",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "amountPaid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "task",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "resourceCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "resourceList",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "provider",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "CPUMHz",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "TFLOPS",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "GBs",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pricePerHour",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isAvailable",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "totalRating",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ratingCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "resultCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "results",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "renter",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "provider",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "task",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "result",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerHour",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_CPUMHz",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_TFLOPS",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_GBs",
        "type": "uint256"
      }
    ],
    "name": "listResource",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_resourceId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_duration",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_task",
        "type": "string"
      }
    ],
    "name": "rentResource",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_resourceId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_result",
        "type": "string"
      }
    ],
    "name": "completeRental",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_resourceId",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "_rating",
        "type": "uint8"
      }
    ],
    "name": "rateResource",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_resourceId",
        "type": "uint256"
      }
    ],
    "name": "getAverageRating",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_resourceId",
        "type": "uint256"
      }
    ],
    "name": "getRentalStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getTimestamp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
let web3, contract, userAccount;
const GAS = 500000;
const infuraURL = "https://sepolia.infura.io/v3/6490db35c1e0491fb482b43cd78b907d";
web3 = new Web3("http://127.0.0.1:5487");
contract = new web3.eth.Contract(contractABI, contractAddress);
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

// document.getElementById('connectWallet').addEventListener('click', async () => {
//   if (window.ethereum) {
//     web3 = new Web3(window.ethereum);
//     try {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       userAccount = accounts[0];
//       document.getElementById("account").innerText = `Connected account: ${userAccount}`;
//       contract = new web3.eth.Contract(contractABI, contractAddress);
//     } catch (err) {
//       console.err(err);
//     }
//   } else {
//     alert("MetaMask is not installed.");
//   }
// });
async function connectWallet() {
  await web3.eth.getAccounts().then(function (res) {
    accounts = res;
    userAccount = accounts[0];
    console.log(userAccount);
    document.getElementById("account").innerText = userAccount;
  })
}
async function connectWallet1() {
  await web3.eth.getAccounts().then(function (res) {
    accounts = res;
    userAccount = accounts[1];
    console.log(userAccount);
    document.getElementById("account").innerText = userAccount;
  })
}
// if (window.ethereum) {
//   web3 = new Web3(window.ethereum);
//   await window.ethereum.enable();
//   const accounts = await web3.eth.getAccounts();
//   userAccount = accounts[0];
//   document.getElementById("account").innerText = `Connected account: ${userAccount}`;
//   contract = new web3.eth.Contract(contractABI, contractAddress);
// } else {
//   alert("MetaMask is not installed.");
// }

async function listResource() {
  const description = document.getElementById("description").value;
  const pricePerHour = document.getElementById("pricePerHour").value;
  const CPUMHz = document.getElementById("CPUMHz").value;
  const TFLOPS = document.getElementById("TFLOPS").value;
  const GBs = document.getElementById("GBs").value;
  try {
    let gasEstimate = await contract.methods.listResource(description, web3.utils.toWei(pricePerHour, "wei") * (10 ** 16), CPUMHz, TFLOPS, GBs)
      .estimateGas({ from: userAccount });
    await contract.methods.listResource(description, web3.utils.toWei(pricePerHour, "wei"), CPUMHz, TFLOPS, GBs)
      .send({ from: userAccount, gas: gasEstimate });
    document.getElementById("listResourceMessage").innerText = "Resource listed successfully!";
    getResources();
  } catch (error) {
    document.getElementById("listResourceMessage").innerText = `Error: ${error.message}`;
    getResources();
  }
}

async function getResources() {
  const resourceList = document.getElementById('resources');
  resourceCount = await contract.methods.resourceCount().call();
  document.getElementById("counter").innerText = resourceCount;
  resourceList.innerHTML = '';

  for (let i = 0; i < resourceCount; i++) {
    const resource = await contract.methods.resourceList(i).call();
    const listItem = document.createElement('li');
    let averageRating = await contract.methods.getAverageRating(i).call();
    listItem.textContent = `ID: ${i}, Provider: ${resource.provider}, Description: ${resource.description}, CPU clock speed: ${resource.CPUMHz} MHz, Storage ${resource.GBs} GBs, Price per hour: ${resource.pricePerHour}, Rating: ${averageRating}, Available: ${resource.isAvailable}`;
    if (!resource.isAvailable) {
      const rental = await contract.methods.rentals(i).call();
      listItem.textContent = listItem.textContent + ` Renter: ${rental.renter} Task: ${rental.task}`;
    }
    resourceList.appendChild(listItem);

  }
}

async function getCompletedTasks() {
  const resultList = document.getElementById('results');
  resultCount = await contract.methods.resultCount().call();
  document.getElementById("counter1").innerText = resultCount;
  resultList.innerHTML = '';

  for (let i = 0; i < resultCount; i++) {
    const result = await contract.methods.results(i).call();
    const listItem = document.createElement('li');
    listItem.textContent = `Provider: ${result.provider}, Renter: ${result.renter}, Task: ${result.task}, Result: ${result.result}`;
    
    resultList.appendChild(listItem);

  }
}


async function rentResource() {
  const resourceId = document.getElementById("resourceId").value;
  const duration = document.getElementById("duration").value;
  const description = document.getElementById("taskDescription").value;

  try {
    const resource = await contract.methods.resourceList(resourceId).call();
    const price = web3.utils.toWei(resource.pricePerHour, "wei") * duration;
    console.log(price);
    const gasEstimate = await contract.methods.rentResource(resourceId, duration, description).estimateGas({ from: userAccount, value: price });
    await contract.methods.rentResource(resourceId, duration, description).send({ from: userAccount, value: price, gas: gasEstimate });
    document.getElementById("rentResourceMessage").innerText = "Resource rented successfully!";
    getResources();
  } catch (error) {
    document.getElementById("rentResourceMessage").innerText = `Error: ${error.message}`;
  }
}

async function completeRental() {
  const resourceId = document.getElementById("completeResourceId").value;
  const result = document.getElementById("completeResult").value;
  console.log(resourceId);
  try {
    const rental = await contract.methods.rentals(resourceId).call();
    const timestamp = await contract.methods.getTimestamp().call();
    console.log(rental.amountPaid);
    console.log(timestamp);
    const gasEstimate = await contract.methods.completeRental(resourceId, result).estimateGas({ from: userAccount, value: rental.amountPaid });
    console.log(gasEstimate);
    await contract.methods.completeRental(resourceId, result).send({ from: userAccount, gas: gasEstimate, value: rental.amountPaid });
    document.getElementById("completeRentalMessage").innerText = "Rental completed successfully!";
    getCompletedTasks();
  } catch (error) {
    document.getElementById("completeRentalMessage").innerText = `Error: ${error.message}`;
  }
}

async function rateResource() {
  const resourceId = document.getElementById("rateResourceId").value;
  const rating = document.getElementById("rating").value;
  console.log(resourceId, rating);
  try {
    const rental = await contract.methods.rentals(resourceId).call();
    console.log(rental.amountPaid);
    const gasEstimate = await contract.methods.rateResource(resourceId, rating).estimateGas({ from: userAccount, value: rental.amountPaid });
    console.log(gasEstimate);
    await contract.methods.rateResource(resourceId, rating).send({ from: userAccount, gas: gasEstimate, value: rental.amountPaid });
    document.getElementById("rateResourceMessage").innerText = "Resource rated successfully!";
    getResources();
  } catch (error) {
    document.getElementById("rateResourceMessage").innerText = `Error: ${error.message}`;
  }

}
getResources();
getCompletedTasks();