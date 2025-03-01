import type { TMockTodo } from "@/constants/mock-data-todo";

import { MOCK_TODO } from "@/constants/mock-data-todo";
import { useCallback, useEffect, useRef, useState } from "react";

// ! use 4 because time will + 1 by interval loob

const TIME_DELAY = 4;

// ---------------------------------------------------------------------------------

const useTodoList = () => {
  const [dataList, setDataList] = useState([...MOCK_TODO]);

  const [fruitList, setFruitList] = useState<Array<TMockTodo>>([]);

  const [vegetableList, setVegetableList] = useState<Array<TMockTodo>>([]);

  const [timeFruit, setTimeFruit] = useState(0);
  const animationIdFruit = useRef<number | null>(null);
  const startTimeFruit = useRef<number | null>(null);

  const [timeVegetable, setTimeVegetable] = useState(0);
  const animationIdVegetable = useRef<number | null>(null);
  const startTimeVegetable = useRef<number | null>(null);

  // --------------------------- Function ---------------------------

  const handleSelectItem = (data: TMockTodo) => {
    const { type, name } = data;

    const delDataList = dataList.filter((item) => item.name !== name);

    setDataList(delDataList);

    if (type === "Fruit") {
      setFruitList((val) => [...val, data]);

      handleStartTimeFruit();
    }

    if (type === "Vegetable") {
      setVegetableList((val) => [...val, data]);

      handleStartTimeVegetable();
    }
  };

  const handleDelToDataList = (data: TMockTodo) => {
    const { name, type } = data;

    if (type === "Fruit") {
      const delFruitList = fruitList.filter((item) => item.name !== name);

      setFruitList(delFruitList);

      handleStartTimeFruit();
    }

    if (type === "Vegetable") {
      const delVegetableList = vegetableList.filter(
        (item) => item.name !== name
      );

      setVegetableList(delVegetableList);

      handleStartTimeVegetable();
    }

    // Default list

    const addToDataList = [...dataList, data];

    setDataList(addToDataList);
  };

  // -------------------------------------------------------------------------
  // --------------------------- Function cooldown ---------------------------
  // -------------------------------------------------------------------------

  // ! --------------------------- Fruit ---------------------------

  const handleStartTimeFruit = () => {
    if (animationIdFruit) {
      stopTimeFruit();
    }

    requestAnimationFrame(startKeepTimeFruit);
  };

  const startKeepTimeFruit = (timestamp: number) => {
    if (!startTimeFruit.current) {
      startTimeFruit.current = timestamp;
    }

    const second = (timestamp - startTimeFruit.current) / 1000;

    setTimeFruit(second);

    animationIdFruit.current = requestAnimationFrame(startKeepTimeFruit);
  };

  const stopTimeFruit = useCallback(() => {
    if (!animationIdFruit.current) {
      return;
    }

    cancelAnimationFrame(animationIdFruit.current);
    animationIdFruit.current = null;
    startTimeFruit.current = null;

    setTimeFruit(0);
  }, []);

  const startRemoveFruit = useCallback(() => {
    const loobDelData = setInterval(() => {
      const getFirstData = fruitList.shift();

      if (!getFirstData) {
        clearInterval(loobDelData);
        return;
      }

      setDataList((val) => [...val, getFirstData]);
    }, 1000);
  }, [fruitList]);

  useEffect(() => {
    const currentTime = startTimeFruit.current;

    if (!currentTime) {
      return;
    }

    if (timeFruit >= TIME_DELAY) {
      stopTimeFruit();
      startRemoveFruit();
    }
  }, [startRemoveFruit, stopTimeFruit, timeFruit]);

  // ! --------------------------- Vegetable ---------------------------

  const handleStartTimeVegetable = () => {
    if (animationIdVegetable) {
      stopTimeVegetable();
    }

    requestAnimationFrame(startKeepTimeVegetable);
  };

  const startKeepTimeVegetable = (timestamp: number) => {
    if (!startTimeVegetable.current) {
      startTimeVegetable.current = timestamp;
    }

    const second = (timestamp - startTimeVegetable.current) / 1000;

    setTimeVegetable(second);

    animationIdVegetable.current = requestAnimationFrame(
      startKeepTimeVegetable
    );
  };

  const stopTimeVegetable = useCallback(() => {
    if (!animationIdVegetable.current) {
      return;
    }

    cancelAnimationFrame(animationIdVegetable.current);
    animationIdVegetable.current = null;
    startTimeVegetable.current = null;

    setTimeVegetable(0);
  }, []);

  const startRemoveVegetable = useCallback(() => {
    const loobDelData = setInterval(() => {
      const getFirstData = vegetableList.shift();

      if (!getFirstData) {
        clearInterval(loobDelData);
        return;
      }

      setDataList((val) => [...val, getFirstData]);
    }, 1000);
  }, [vegetableList]);

  useEffect(() => {
    const currentTime = startTimeVegetable.current;

    if (!currentTime) {
      return;
    }

    if (timeVegetable >= TIME_DELAY) {
      stopTimeVegetable();
      startRemoveVegetable();
    }
  }, [startRemoveVegetable, stopTimeVegetable, timeVegetable]);

  return {
    dataList,
    fruitList,
    vegetableList,
    handleSelectItem,
    handleDelToDataList,
  };
};

export { useTodoList };
