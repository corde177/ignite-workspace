import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton
} from "./styles";
import { createContext, useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  intterruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }
/* 
  function handleCreateNewCicle(data: NewCicleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    reset();
  }
 */
  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, intterruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  // const task = watch("task");

  // const isSubmitDesabled = !task;

  return (
    <HomeContainer>
      <form /* onSubmit={handleSubmit(handleCreateNewCicle)} */>
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          {/* <NewCycleForm /> */}
          <CountDown />
        </CyclesContext.Provider>
        {activeCycle ? (
          <StopCountDownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Intorromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton/*  disabled={isSubmitDesabled} */ type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
