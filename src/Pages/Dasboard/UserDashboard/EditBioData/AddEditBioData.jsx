import { Button, Label, TextInput } from "flowbite-react";

const AddEditBioData = () => {
  return (
    <div className="p-4">
      <form className="flex max-w-md flex-col gap-4">






        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
       


        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddEditBioData;
