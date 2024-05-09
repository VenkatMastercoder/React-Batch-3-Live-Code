import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid , isDirty },
  } = useForm({
    defaultValues: {
      name: "Venkat",
      email: "wsflkelkfr",
      message: "",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // const vaildateForm = (data) => {
  //   console.log(data);
  //   if (!data.name) {
  //     console.log("data is Empty");
  //   }
  // };

  const handleSubmitForm = (data, event) => {
    event.preventDefault();
    console.log(data);
    // API --> Data Base End
    //save()
  };

  console.log(errors);

  console.log(watch("name"));
  console.log(watch("email"));
  console.log(watch("message"));

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="border border-red-500"
          {...register("name")}
        />
        <p>{errors?.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="border border-red-500"
          {...register("email")}
        />
        <p>{errors?.email?.message}</p>

        <label htmlFor="message">Message</label>
        <textarea
          rows={2}
          cols={10}
          id="message"
          {...register("message")}></textarea>
        <p>{errors?.message?.message}</p>

        <button
          className={!isValid && isDirty ? "bg-slate-500" : "bg-green-500"}
          type="submit"
          disabled={isValid}>
          Submit
        </button>

        <p>{isValid  && <p>Form is Vaild</p>}</p>
        <p>{!isValid  && <p>Form is InVaild</p>}</p>
        <p>{isDirty  && <p>Form has Modified</p>}</p>
        <p>{!isDirty  && <p>Form has not been Modified</p>}</p>

      </form>
    </>
  );
};

export default Contact;
