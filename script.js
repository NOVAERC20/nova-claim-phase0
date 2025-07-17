
async function claim() {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask is required to claim.');
    return;
  }

  await ethereum.request({ method: 'eth_requestAccounts' });
  const web3 = new Web3(window.ethereum);
  const contractAddress = '0x93f195aC9fe7199448B18b065d80021C14eBcd5';
  const contract = new web3.eth.Contract(abi, contractAddress);
  const accounts = await web3.eth.getAccounts();

  try {
    await contract.methods.claim().send({ from: accounts[0] });
    alert('Claim successful!');
  } catch (error) {
    alert('Claim failed. Maybe already claimed?');
    console.error(error);
  }
}
