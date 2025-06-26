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
    }
  },
  {
    id: "u2",
    name: "Bob",
    address: "0xMockBob456",
    role: "Intern",
    gpa: 0,
    sbt: {
      name: "Diploma in Marketing",
      issuedBy: "Bangkok Business College",
      image: "/sbt-bob.png",
    }
  },
  {
    id: "u3",
    name: "Carol",
    address: "0xMockCarol789",
    role: "Intern",
    gpa: 3.5,
    sbt: {
      name: "B.A. in Arts",
      issuedBy: "Thammasat University",
      image: "/sbt-carol.png",
    }
  },
  {
    id: "u4",
    name: "David",
    address: "0xMockDavid321",
    role: "client",
    gpa: 0,
    sbt: {
      name: "B.Sc. in Computer Science",
      issuedBy: "Kasetsart University",
      image: "/sbt-david.png",
    }
  },
];
