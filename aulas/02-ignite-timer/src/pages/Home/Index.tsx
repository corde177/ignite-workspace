import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from  "zod";

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number()
  .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
  .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
})


type NewCicleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
const { register, handleSubmit, watch, reset } = useForm<NewCicleFormData>({
  resolver: zodResolver(newCycleFormValidationSchema),
  defaultValues: {
    task: "",
    minutesAmount: 0
  }
});

  function handleCreateNewCicle(data: NewCicleFormData) {
    console.log(data)
    reset();
  } 

  const task = watch("task");
  const isSubmitDesabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projecto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
             <option value="projeto 1"></option>
             <option value="projeto 2"></option>
             <option value="projeto 3"></option>
             <option value="Banana"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            placeholder="00"
            step={5} 
            min={5}
           /*  max={60} */
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={isSubmitDesabled}  type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
