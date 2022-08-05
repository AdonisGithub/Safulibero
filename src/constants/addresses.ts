import { Networks } from "./blockchain";

const BSC_MAINNET = {
    SAFLIB_ADDRESS : "0xe8c3DfaAF2237f2818c3E54B0E924fF255BA20B6",
    FIREPIT_ADDRESS : "0x5e1f0Ef9518999c41285a6BBD712776C1D6BdE0e",
    TREASURY_ADDRESS : "0x2e67B79C4cC7db6558424daB9615b170f659E0Ce",
    SIF_ADDRESS : "0xae88b74450e63157f15745803085D8461BA8ccf6",
    PAIR_ADDRESS : "0x2af30a4a404adba3d2ecdf2290bed33512294d18",
    BUSD_ADDRESS : "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.BSC) return BSC_MAINNET;
    throw Error("Network don't support");
};
