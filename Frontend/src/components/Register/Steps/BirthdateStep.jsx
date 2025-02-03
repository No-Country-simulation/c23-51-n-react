import PropTypes from "prop-types";
import Register from "../Register";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import Picker from "react-mobile-picker";

const birthdateSchema = z
  .object({
    year: z.string(),
    month: z.string(),
    day: z.string(),
  })
  .refine(
    (data) => {
      const enteredDate = new Date(
        Number.parseInt(data.year),
        Number.parseInt(data.month) - 1,
        Number.parseInt(data.day),
      );
      const currentDate = new Date();
      let age = currentDate.getFullYear() - enteredDate.getFullYear();
      if (
        currentDate.getMonth() < enteredDate.getMonth() ||
        (currentDate.getMonth() === enteredDate.getMonth() &&
          currentDate.getDate() < enteredDate.getDate())
      ) {
        age--;
      }
      return (
        enteredDate.getFullYear() === Number.parseInt(data.year) &&
        enteredDate.getMonth() === Number.parseInt(data.month) - 1 &&
        enteredDate.getDate() === Number.parseInt(data.day) &&
        enteredDate <= currentDate &&
        age >= 17
      );
    },
    {
      message: "Debes tener mínimo 18 años para registrarte.",
    },
  );

const BirthdateStep = ({ onNext, onBack }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  const form = useForm({
    resolver: zodResolver(birthdateSchema),
    defaultValues: {
      year: years[18],
      month: "06",
      day: "10",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const formattedDate = `${data.year}-${data.month}-${data.day}`;
    onNext(formattedDate);
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
            <Controller
              name="day"
              control={form.control}
              render={({ field }) => (
                <FormField
                  control={form.control}
                  name="day"
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <Picker
                          value={form.watch()}
                          onChange={(newValue) => {
                            field.onChange(newValue.day);
                            form.setValue("month", newValue.month);
                            form.setValue("year", newValue.year);
                            form.trigger();
                          }}
                          height={150}
                          itemHeight={40}
                          wheelMode="natural"
                        >
                          <Picker.Column name="day" className="text-center">
                            {days.map((day) => (
                              <Picker.Item key={day} value={day}>
                                {day}
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
                          <Picker.Column name="year" className="text-center">
                            {years.map((year) => (
                              <Picker.Item key={year} value={year}>
                                {year}
                              </Picker.Item>
                            ))}
                          </Picker.Column>
                        </Picker>
                      </FormControl>
                      {!form.formState.isValid && (
                        <p className="mt-2 text-sm text-red-500">
                          {form.formState.errors.day?.message}
                        </p>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            />
          </div>

          <div>
            <Button type="submit" variant="outline" disabled={!form.formState.isValid}>
              Siguiente
            </Button>
          </div>
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
