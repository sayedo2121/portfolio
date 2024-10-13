'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface FormDataObject {
    name: string;
    email: string;
    message: string;
}

interface formField {
    value: string;
}

export default function page() {
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [messageField, setMessageField] = useState('');

    async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append('access_key', 'd49b6192-a302-43dd-aa76-c73c9b18c4a1');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
              const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
                body: json,
              });

              const result = await response.json();
              if (result.success) {
                toast('Message sent successfully!',
                    {
                      icon: '✔️',
                      style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                    }
                  );
              } else{
                toast('Failed to forward message',
                    {
                      icon: '❌',
                      style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                    }
                  );
              }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast('Failed to forward message',
                {
                  icon: '❌',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                }
              );
        }
    }

    function handleNameChange(event: React.FormEvent) {
        const element = event.target as HTMLInputElement;
        setNameField(element.value);
    }

    function handleEmailChange(event: React.FormEvent) {
        const element = event.target as HTMLInputElement;
        setEmailField(element.value);
    }

    function handleMessageChange(event: React.FormEvent) {
        const element = event.target as HTMLInputElement;
        setMessageField(element.value);
    }

    let formFilled: boolean = false;
    if (nameField != '' && emailField != '' && messageField != '')
        formFilled = true;



    return (
        <>
            <div className='mb-10 text-2xl'>
                <h1 className='font-bold'>Get in touch</h1>
            </div>
            <form id='contactForm' onSubmit={handleSubmit} className='flex flex-col gap-4 [&>*]:rounded-lg [&>input]:mb-4 [&>textarea]:mb-4 [&>label]:cursor-none'>

                <label htmlFor='nameInput'>Name</label>
                <input autoComplete='true' type="text" id="nameInput" name="name" value={nameField} onChange={handleNameChange} className='border-2 border-gray-900 p-2 bg-transparent bg-gradient-to-r from-sky-800/10 to-indigo-900/10' />

                <label htmlFor='emailInput'>Email</label>
                <input autoComplete='true' type="email" id="emailInput" name="email" value={emailField} onChange={handleEmailChange} className='border-2 border-gray-900 p-2 bg-transparent bg-gradient-to-r from-sky-800/10 to-indigo-900/10' />

                <label htmlFor='messageInput'>Message</label>
                <textarea id="messageInput" name="message" value={messageField} onChange={handleMessageChange} className='border-2 border-gray-900 p-2 bg-transparent bg-gradient-to-r from-sky-800/10 to-indigo-900/10' />
                <button type="submit" className={`w-52 mt-5 p-2 border-2 border-gray-900 
                ${formFilled ? 'bg-gradient-to-r from-sky-800 to-indigo-900 ring-1 ring-sky-800' : 'bg-gradient-to-r from-sky-800/30 to-indigo-900/30'}`}>Submit Form</button>
            </form>

            <div className='mt-32 flex flex-row gap-20'>
                <div className='flex flex-col gap-8'>
                <div className='[&>*]:text-xs'>
                    <h4 className='mb-2 font-bold'>Phone Number</h4>
                    <p>+97333364726</p>
                    <p>+447500181853</p>
                </div>
                <div className='[&>*]:text-xs'>
                    <h4 className='mb-2 font-bold'>Email</h4>
                    <p>sayedo2121@gmail.com</p>
                </div>
                </div>
                
                <div className='flex flex-col gap-8'>
                <Link href='https://www.linkedin.com/in/sayed-husain-kadhem-36a027190' target='_blank'>
                    <div className='[&>*]:text-xs'>
                        <h4 className='mb-2 font-bold'>LinkedIn</h4>
                        <p>@Sayed Husain Kadhem</p>
                    </div>
                </Link>
                <Link href='https://www.linkedin.com/in/sayed-husain-kadhem-36a027190' target='_blank'>
                    <div className='[&>*]:text-xs'>
                        <h4 className='mb-2 font-bold'>Instagram</h4>
                        <p>@sayedo2121</p>
                    </div>
                </Link>
                </div>
                
            </div>
        </>
    );
}