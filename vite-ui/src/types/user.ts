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
  };
  