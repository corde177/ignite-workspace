import { FormContainer, MinutesAmountInput, TaskInput } from "./style";
import { useContext } from "react";
import { CyclesContext } from "../../Index";
import { useFormContext } from "react-hook-form";


export function NewCycleForm() {

const { activeCycle } = useContext(CyclesContext)
const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projecto"
        disabled={!!activeCycle}
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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
