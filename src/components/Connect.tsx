import {
  useAccount,
  useConnect,
  useChainId,
  useConfig,
  useSwitchChain,
} from "wagmi";

import Modal from "./Modal";

export default function Connect() {
  const { isConnected, address } = useAccount();
  const { connect, isPending } = useConnect();
  const { switchChain } = useSwitchChain();

  const config = useConfig();
  const chainId = config.chains[0].id;
  const walletChainId = useChainId();

  const walletExists = !!window.ethereum;
  const walletConnected = walletExists && isConnected;
  const walletNetwork = !!config.chains.find((c) => c.id === walletChainId);
  const walletApproved = walletNetwork && address;

  const walletStates = [
    {
      id: "exists",
      valid: walletExists,
      message: "Please install MetaMask",
      action: () => window.open("https://metamask.io"),
    },
    {
      id: "pending",
      valid: !isPending,
      message: (
        <>
          <i className="fa-duotone fa-solid fa-timer fa-lg"></i> There is a
          pending connection request in your wallet. Go to your extension to
          approve it.
        </>
      ),
      action: () => {},
    },
    {
      id: "connected",
      valid: walletConnected,
      message: (
        <>
          <i className="fa-duotone fa-solid fa-cactus fa-lg"></i> Please connect
          your wallet
        </>
      ),
      action: () => connect({ chainId, connector: config.connectors[0] }),
    },
    {
      id: "network",
      valid: walletNetwork,
      message: <>Please switch to the correct network</>,
      action: () => switchChain({ chainId }),
    },
    {
      id: "approved",
      valid: walletApproved,
      message: "Please approve the connection",
      action: () => {}, // whatever approval action needed
    },
  ];

  const currentIssue = walletStates.find((state) => !state.valid);
  const needsModal = !!currentIssue;

  if (!needsModal) return <></>;

  return (
    <Modal isOpen={needsModal} onClose={() => currentIssue?.action()}>
      <div className="modalMessage" onClick={currentIssue?.action}>
        {currentIssue?.message}
      </div>
    </Modal>
  );
}
