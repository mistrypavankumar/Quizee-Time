import bcrypt from "bcryptjs";

/* 
  <==========Note: =========>
  categories

  1 = c
  2 = c++
  3 = Java
  4 = python
*/

export const userData = {
  users: [
    {
      name: "john",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
};

export const cquizData = {
  quizQuestions: [
    {
      question:
        "Q1: Which of the following is the correct syntax to print the message in C++ language? --- 1",
      option1: 'cout <<"Hello world!";',
      option2: "Cout << Hello world! ;",
      option3: "Out << Hello world!;",
      option4: "None of the above",
      answer: "option1",
      category: "c",
    },
    {
      question: "Q2: Which of the following is the correct identifier? --- 1",
      option1: "$var_name",
      option2: "VAR_123",
      option3: "varname@",
      option4: "None of the above",
      answer: "option2",
      category: "c",
    },
    {
      question: "Q3: Which of the following is the address operator? --- 2",
      option1: "@",
      option2: "#",
      option3: "&",
      option4: "%",
      answer: "option3",
      category: "c",
    },
    {
      question:
        "Q4: Which of the following features must be supported by any programming language to become a pure object-oriented programming language? --- 2",
      option1: "Encapsulation",
      option2: "Inheritance",
      option3: "Polymorphism",
      option4: "All of the above",
      answer: "option4",
      category: "c",
    },
  ],
};

export const pyquizData = {
  quizQuestions: [
    {
      // c: [
      // {
      question:
        "Q1: Which of the following is the correct syntax to print the message in C++ language? --- 1",
      option1: 'cout <<"Hello world!";',
      option2: "Cout << Hello world! ;",
      option3: "Out << Hello world!;",
      option4: "None of the above",
      answer: "option1",
      category: "c++",
      qNo: "1",
    },
    {
      question: "Q2: Which of the following is the correct identifier? --- 1",
      option1: "$var_name",
      option2: "VAR_123",
      option3: "varname@",
      option4: "None of the above",
      answer: "option2",
      category: "c++",
      qNo: "2",
    },
    {
      question: "Q3: Which of the following is the address operator? --- 2",
      option1: "@",
      option2: "#",
      option3: "&",
      option4: "%",
      answer: "option3",
      category: "c++",
      qNo: "3",
    },
    {
      question:
        "Q4: Which of the following features must be supported by any programming language to become a pure object-oriented programming language? --- 2",
      option1: "Encapsulation",
      option2: "Inheritance",
      option3: "Polymorphism",
      option4: "All of the above",
      answer: "option4",
      category: "c++",
      qNo: "4",
    },
  ],
};
