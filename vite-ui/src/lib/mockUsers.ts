import { MockUser } from "@/types/user";

export const mockUsers: MockUser[] = [
  {
    id: "u1",
    name: "Alice",
    address: "0xMockAlice123",
    role: "Student",
    gpa: 3.8,
    sbt: {
      name: "Bachelor of Engineering",
      issuedBy: "Chiang Mai University",
      image: "/sbt-alice.png",
    },
    zkProof: {
      proof: {
        pi_a: ["0xabc", "0xdef"],
        pi_b: [["0xaaa", "0xbbb"], ["0xccc", "0xddd"]],
        pi_c: ["0xeee", "0xfff"],
        protocol: "groth16",
        curve: "bn128",
      },
      publicSignals: ["3.8", "Chiang Mai University"],
    },
  },
  {
    id: "u2",
    name: "Bob",
    address: "0xMockBob456",
    role: "Graduate",
    gpa: 2.9,
    sbt: {
      name: "Diploma in Marketing",
      issuedBy: "Bangkok Business College",
      image: "/sbt-bob.png",
    },
    zkProof: {
      proof: {
        pi_a: ["0x111", "0x222"],
        pi_b: [["0x333", "0x444"], ["0x555", "0x666"]],
        pi_c: ["0x777", "0x888"],
        protocol: "groth16",
        curve: "bn128",
      },
      publicSignals: ["2.9", "Bangkok Business College"],
    },
  },
  {
    id: "u3",
    name: "Carol",
    address: "0xMockCarol789",
    role: "Job Seeker",
    gpa: 3.5,
    sbt: {
      name: "B.A. in Arts",
      issuedBy: "Thammasat University",
      image: "/sbt-carol.png",
    },
    zkProof: {
      proof: {
        pi_a: ["0x999", "0xaaa"],
        pi_b: [["0xbbb", "0xccc"], ["0xddd", "0xeee"]],
        pi_c: ["0xfff", "0x000"],
        protocol: "groth16",
        curve: "bn128",
      },
      publicSignals: ["3.5", "Thammasat University"],
    },
  },
  {
    id: "u4",
    name: "David",
    address: "0xMockDavid321",
    role: "Intern",
    gpa: 3.2,
    sbt: {
      name: "B.Sc. in Computer Science",
      issuedBy: "Kasetsart University",
      image: "/sbt-david.png",
    },
    zkProof: {
      proof: {
        pi_a: ["0xaaa1", "0xbbb1"],
        pi_b: [["0xccc1", "0xddd1"], ["0xeee1", "0xfff1"]],
        pi_c: ["0x1111", "0x2222"],
        protocol: "groth16",
        curve: "bn128",
      },
      publicSignals: ["3.2", "Kasetsart University"],
    },
  },
];
