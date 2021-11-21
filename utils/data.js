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
      question: "What punctuation ends most lines of C code?",
      option1: ".",
      option2: ";",
      option3: ":",
      option4: "'",
      answer: "option2",
      category: "c",
    },
    {
      question: "Which of the following is not a correct variable type?",
      option1: "int",
      option2: "double",
      option3: "float",
      option4: "real",
      answer: "option4",
      category: "c",
    },
    {
      question:
        "Which of the following is the correct operator to compare two variables?",
      option1: "=",
      option2: ":=",
      option3: "==",
      option4: "eqaul",
      answer: "option3",
      category: "c",
    },
    {
      question: "Who is known as founder of C langauage?",
      option1: "Dennis Ritchie",
      option2: "Dennis Gosling",
      option3: "James Gosling",
      option4: "Martin Richard",
      answer: "option1",
      category: "c",
    },
    {
      question: "Which of the following is true about C?",
      option1: "Platform Independent",
      option2: "Machine Independent",
      option3: "Low Level Language",
      option4: "High Level Language",
      answer: "option2",
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
        "Which of the following is the correct syntax to print the message in C++ language? --- python",
      option1: 'cout <<"Hello world!";',
      option2: "Cout << Hello world! ;",
      option3: "Out << Hello world!;",
      option4: "None of the above",
      answer: "option1",
      category: "python",
      qNo: "1",
    },
    {
      question: "Which of the following is the correct identifier? --- python",
      option1: "$var_name",
      option2: "VAR_123",
      option3: "varname@",
      option4: "None of the above",
      answer: "option2",
      category: "python",
      qNo: "2",
    },
    {
      question: "Which of the following is the address operator? --- python",
      option1: "@",
      option2: "#",
      option3: "&",
      option4: "%",
      answer: "option3",
      category: "python",
      qNo: "3",
    },
    {
      question:
        "Which of the following features must be supported by any programming language to become a pure object-oriented programming language? --- python",
      option1: "Encapsulation",
      option2: "Inheritance",
      option3: "Polymorphism",
      option4: "All of the above",
      answer: "option4",
      category: "python",
      qNo: "4",
    },
  ],
};

export const cppquizData = {
  quizQuestions: [
    {
      question:
        "Which of the following is the correct syntax to print the message in C++ language? --- cpp",
      option1: 'cout <<"Hello world!";',
      option2: "Cout << Hello world! ;",
      option3: "Out << Hello world!;",
      option4: "None of the above",
      answer: "option1",
      category: "cpp",
      qNo: "1",
    },
    {
      question: "Which of the following is the correct identifier? --- cpp",
      option1: "$var_name",
      option2: "VAR_123",
      option3: "varname@",
      option4: "None of the above",
      answer: "option2",
      category: "cpp",
      qNo: "2",
    },
    {
      question: "Which of the following is the address operator? --- cpp",
      option1: "@",
      option2: "#",
      option3: "&",
      option4: "%",
      answer: "option3",
      category: "cpp",
      qNo: "3",
    },
    {
      question:
        "Which of the following features must be supported by any programming language to become a pure object-oriented programming language? --- cpp",
      option1: "Encapsulation",
      option2: "Inheritance",
      option3: "Polymorphism",
      option4: "All of the above",
      answer: "option4",
      category: "cpp",
      qNo: "4",
    },
  ],
};

export const javaquizData = {
  quizQuestions: [
    {
      // c: [
      // {
      question:
        "Which of the following is the correct syntax to print the message in C++ language? --- java",
      option1: 'cout <<"Hello world!";',
      option2: "Cout << Hello world! ;",
      option3: "Out << Hello world!;",
      option4: "None of the above",
      answer: "option1",
      category: "java",
      qNo: "1",
    },
    {
      question: "Which of the following is the correct identifier? --- java",
      option1: "$var_name",
      option2: "VAR_123",
      option3: "varname@",
      option4: "None of the above",
      answer: "option2",
      category: "java",
      qNo: "2",
    },
    {
      question: "Which of the following is the address operator? --- java",
      option1: "@",
      option2: "#",
      option3: "&",
      option4: "%",
      answer: "option3",
      category: "java",
      qNo: "3",
    },
    {
      question:
        "Which of the following features must be supported by any programming language to become a pure object-oriented programming language? --- java",
      option1: "Encapsulation",
      option2: "Inheritance",
      option3: "Polymorphism",
      option4: "All of the above",
      answer: "option4",
      category: "java",
      qNo: "4",
    },
  ],
};
