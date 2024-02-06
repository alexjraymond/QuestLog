import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "~/component/Button";
import { Quest } from "~/component/Quest";
import { api } from "~/utils/api";
import { BsFilterSquare } from 'react-icons/bs'
import { useEffect, useState } from "react";
// import dayjs from "dayjs"

// dayjs().format()


interface Quest {
  id: string
  title: string
  description: string
  questTitle: string
  questDescription: string
}

const Home: NextPage = () => {
  const {data, isLoading: questsLoaded} = api.generate.getQuests.useQuery();
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    if (data) {
      setQuests(data);
    }
  }, [data]);

  const handleQuestUpdated = (updatedQuest: { id: string; }) => {
    console.log("handleQuestUpdated called with", updatedQuest);
    const updatedQuests = quests.map(quest => {
      if (quest.id === updatedQuest.id) {
        return { ...quest, ...updatedQuest };
      }
      return quest;
    });
  
    setQuests(updatedQuests);
  };

  return (
    <>
      <Head>
        <title>QuestLog</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center mt-6 max-w-screen-md">
        <section>
          <header className="justify-between flex items-end w-full border-b border-neutral-300 pb-2">
            <h1 className="text-3xl flex">Quests</h1>
            <Button className="flex align-text-bottom" variant="ghost"><BsFilterSquare /></Button>
          </header>
          <article>
            <ul className="">
              {quests.map((quest: Quest) => (
                <Quest 
                  id={quest.id}
                  key={quest.id}
                  questTitle={quest.questTitle}
                  questDescription={quest.questDescription}
                  onUpdated={handleQuestUpdated}
                />
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
