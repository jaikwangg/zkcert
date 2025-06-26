export type ZkProofResult = {
    proof: {
      pi_a: string[];
      pi_b: string[][];
      pi_c: string[];
      protocol: string;
      curve: string;
    };
    publicSignals: string[]; // เช่น ["3.8", "0xabc..."] หรือ hash แล้ว
  };
  
  export type SBTInfo = {
    name: string;
    issuedBy: string;
    image: string;
  };
  
  export type MockUser = {
    id: string;
    name: string;
    address: string;
    gpa: number;
    role: string;
    sbt: SBTInfo;
    zkProof: ZkProofResult;
  };
  