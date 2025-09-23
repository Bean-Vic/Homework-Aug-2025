import Image from "next/image";
import { DogImg } from "@/components/dog_img";
import { TodoList } from "@/components/todo_list";

export default function Home() {
  return (
    <div>
      <DogImg></DogImg>
      <TodoList></TodoList>
    </div>
  );
}
