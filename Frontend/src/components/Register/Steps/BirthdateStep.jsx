import PropTypes from "prop-types";
import Register from "../Register";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import Picker from "react-mobile-picker";

const birthdateSchema = z
  .object({
    year: z.string(),
    month: z.string(),
    day: z.string(),
  })
  .refine(
    (data) => {
      const date = new Date(
        Number.parseInt(data.year),
        Number.parseInt(data.month) - 1,
        Number.parseInt(data.day),
      );
      return (
        date.getFullYear() === Number.parseInt(data.year) &&
        date.getMonth() === Number.parseInt(data.month) - 1 &&
        date.getDate() === Number.parseInt(data.day)
      );
    },
    {
      message: "Fecha inválida",
    },
  );

const BirthdateStep = ({ onNext, onBack }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  const [selectedValue, setSelectedValue] = useState({
    year: years[18], // minimo 18 años ? validar
    month: "06",
    day: "01",
  });

  const form = useForm({
    resolver: zodResolver(birthdateSchema),
    defaultValues: selectedValue,
    mode: "onChange",
  });

  const onSubmit = () => {
    const formattedDate = `${selectedValue.year}-${selectedValue.month}-${selectedValue.day}`;
    onNext(formattedDate);
  };

  const handlePickerChange = (newValue) => {
    setSelectedValue(newValue);
    form.setValue("year", newValue.year);
    form.setValue("month", newValue.month);
    form.setValue("day", newValue.day);
  };

  return (
    <Register onBack={onBack}>
      <div className="space-y-2">
        <h1>¿Cuándo naciste?</h1>
        <p className="text-cream/80">
          Tu fecha de nacimiento nos ayudará a personalizar tus entrenamientos.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between space-y-[70%]"
        >
          <div className="w-full">
            <Picker
              value={selectedValue}
              onChange={handlePickerChange}
              height={150}
              itemHeight={40}
              wheelMode="natural"
            >
              <Picker.Column name="year" className="text-center">
                {years.map((year) => (
                  <Picker.Item key={year} value={year}>
                    {year}
                  </Picker.Item>
                ))}
              </Picker.Column>
              <Picker.Column name="month" className="text-center">
                {months.map((month) => (
                  <Picker.Item key={month} value={month}>
                    {month}
                  </Picker.Item>
                ))}
              </Picker.Column>
              <Picker.Column name="day" className="text-center">
                {days.map((day) => (
                  <Picker.Item key={day} value={day}>
                    {day}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
          {form.formState.errors.year && (
            <p className="text-sm text-red-500">{form.formState.errors.year.message}</p>
          )}
          <Button
            type="submit"
            variant="outline"
            className="w-full text-white bg-orange-500 hover:bg-orange-600"
            disabled={!form.formState.isValid}
          >
            Siguiente
          </Button>
        </form>
      </Form>
    </Register>
  );
};

BirthdateStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default BirthdateStep;
