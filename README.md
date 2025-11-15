<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/9120acf7-a8e2-40d3-80bb-aece2667bc23" />

# **alx-project-0x01 — Next.js Application**

A full-featured Next.js web application built with **TypeScript**, **Tailwind CSS**, and **ESLint**, designed to demonstrate key concepts in modern frontend development.
The application includes multiple pages, dynamic components, API-fetched data, reusable UI components, and interactive modals for adding new posts and users.

## **📌 Project Description**

This project explores how to build a structured multi-page application with:

* Dynamic routing
* Component-based UI architecture
* API integration
* Type-safe interfaces
* Reusable components
* Modal interactions
* Static site generation
* Responsive design using Tailwind CSS

It also demonstrates best practices for folder organization and clean code in a real-world environment.

## **🎯 Learning Objectives**

By completing this project, you will learn how to:

* Initialize a Next.js app with TypeScript, Tailwind CSS, and ESLint
* Use dynamic routing between pages
* Build reusable components with proper TypeScript typing
* Fetch and display API data (JSONPlaceholder)
* Build interactive forms and modal components
* Manage state using React hooks
* Use `getStaticProps` for static site generation
* Organize a project using feature-based folder structure
* Apply responsive design using Tailwind CSS utility classes

## **🛠️ Requirements**

### **Technical Requirements**

* Node.js v16+
* npm or yarn
* Next.js (latest)
* TypeScript
* Tailwind CSS
* ESLint

### **Functional Requirements**

#### **Base Setup**

* Initialize project with `create-next-app@latest`
* Enable: **ESLint**, **Tailwind CSS**, **Import Alias**
* Configure global Tailwind styles
* Build project folder structure
* Create basic component skeletons

#### **Navigation**

* Add a header with links to **Home**, **Posts**, and **Users**
* Import `Header` in `/`, `/posts`, and `/users`
* Enable navigation without manual URL changes

#### **Posts**

* Fetch posts using JSONPlaceholder API
* Create `PostCard` reusable component
* Display a grid of posts
* Implement a Post Modal (`PostModal`) for adding new posts
* Handle state updates

#### **Users**

* Fetch users using JSONPlaceholder API
* Create `UserCard`
* Build `UserModal` to add new users
* Support nested data structures in TypeScript


## **📂 Project Structure**


alx-project-0x01/
├── components/
│   ├── common/          # Reusable UI components
│   └── layout/          # Layout components (Header, Footer)
├── interfaces/          # TypeScript interfaces
├── pages/
│   ├── posts/           # Posts pages
│   ├── users/           # Users pages
│   └── index.tsx        # Homepage
├── public/              # Static assets
├── styles/              # Global CSS
└── ...                  # Next.js system files


## **📘 Key Concepts Used**

### **Component Architecture**

* Atomic design principles
* Reusable UI blocks (Button, Card, Modal)
* Separation of presentational and logical components

### **TypeScript**

* Defined interfaces for posts, users, modal props, and data models
* Typed props and state
* Form and event typing

### **API Integration**

Using JSONPlaceholder for:

* `/posts`
* `/users`

### **State Management**

* `useState` for modal and form states
* Controlled inputs
* Lifting state where needed

### **Styling**

* Tailwind CSS utility-first styling
* Responsive grid layout
* Consistent spacing and typography


## **🚀 Implementation Notes**

* `getStaticProps` used for pre-fetching posts & users
* Modals demonstrate overlay behavior and form handling
* Tailwind CSS classes used throughout for styling
* All components built using TypeScript for type safety

