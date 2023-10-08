const users = [
  {
    common: [
      {
        name: "pedro",
        age: 45,
        email: "pedro@gmail.com",
        balance: 1000,
      },
      {
        name: "ana",
        age: 70,
        email: "ana@gmail.com",
        balance: 1000,
      },
    ],
    prime: [
      {
        name: "ronaldo",
        age: 20,
        email: "ronaldo@gmail.com",
        balance: 1000,
      },
      [
        {
          name: "paula",
          age: 20,
          email: "paula@gmail.com",
          balance: 1000,
        },
      ],
    ],
  },
];

users[0].common[1].balance = 2500;
users[0].common[0].email = "pedroromario@bol.com.br";

users[0].prime[0].balance = 0
users[0].prime[0].name = "Mario"
users[0].prime[0].email = "mario@gmail.com";

users[0].prime[1][0].bank = "Nubank"
