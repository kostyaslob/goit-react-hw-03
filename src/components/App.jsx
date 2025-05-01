import './App.css';
import { useEffect, useState } from 'react';

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import Contact from "./Contact/Contact";

export default function App() {
  
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Contact />
      
    </>
  );
};