
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import { Button } from "~/component/Button";
import { FormGroup } from "~/component/FormGroup";
import { Input } from "~/component/Input";
import { Quest } from "~/component/Quest";
import { Toggle } from "~/component/Toggle";
import { api } from "~/utils/api";



const GenerateTask: NextPage = () => {
  const [form, setForm] = useState({
    title: '',  
    description: '',
  })
  const [quest, setQuest] = useState({
    title: '',
    description: '',
  })

  const generateQuest = api.generate.generateQuest.useMutation({
    onSuccess(data) {
      console.log('mutation finished', data)
      if (!data.returnedQuest) return;
      const rawQuest = data.returnedQuest
      const questNameMatch = rawQuest.match(/Quest Name:\s*(.+?)\s*Quest Description:/)
      const questDescriptionMatch = rawQuest.match(/Quest Description:\s*(.+)/)
      const questName = questNameMatch ? questNameMatch[1] : '';
      const questDescription = questDescriptionMatch ? questDescriptionMatch[1] : '';
      console.log(questNameMatch)
      console.log(questDescriptionMatch)
      setQuest({
        title: questName || '',
      description: questDescription || '',
    })}
  })

  function updateForm(key: string) {
    return function(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) =>({
      ...prev, [key]: e.target.value,
    }));
      }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    // submit form data to backend
    generateQuest.mutate({
      title: form.title,
      description: form.description
    })
    console.log('title', form.title, 'desc', form.description)
    setForm({title: '', description:''})
  }
    
  const session= useSession();

  const isLoggedIn = !!session.data;

  return (
    <>
      <Head>
        <title>Generate Task</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex min-h-screen flex-col items-center justify-center">
        
        {!isLoggedIn && (
          <Button onClick={() => {
            signIn().catch(console.error)}}>
              Login
          </Button>
          )}
        {isLoggedIn && (
          <Button onClick={() => {
            signOut().catch(console.error)}}>
              Logout
          </Button>
          )}

            {session.data?.user.name}

        <form 
        className="flex flex-col gap-4"
        onSubmit={handleFormSubmit}
        >
          <FormGroup>
          <h1>new quest</h1>
          <Input 
          placeholder='title'
          onChange={updateForm('title')}
          value={form.title}
          />
          <Input 
          placeholder='description'
          value={form.description}
          onChange={updateForm('description')}
          />
          <Toggle>Quest?</Toggle>
          <Button>
            Submit
          </Button>
          </FormGroup>

          <Quest className="w-[32rem]">
            <p>{quest.title}</p>
            <p>{quest.description}</p>
          </Quest>
        </form>
      </main>
    </>
  );
};

export default GenerateTask;

