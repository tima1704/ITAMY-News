import React from "react";
import { useForm } from "react-hook-form";
import cls from "../../Styles/AddNewsStyles/index.module.scss";
import { useNavigate } from "react-router-dom";

export const AddNews = () => {
  
  const [news, setNews] = React.useState(
    JSON.parse(localStorage.getItem("news")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("news", JSON.stringify(news));
  }, [news]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleSendNews = (ValueNews) => {
    setNews((item) => [...item, { ...ValueNews, id: item.length, }]);
    reset();
  };

  return (
    <div className={cls.add_news_container}>
      <h1>Add news page</h1>
      <form onSubmit={handleSubmit(handleSendNews)} className={cls.form_news}>
        <div>
          <input
            {...register("category", {
              required: "category is required field",
              minLength: {
                value: 3,
                message: "min length 3",
              },
              maxLength: {
                value: 10,
                message: "max length 10",
              },
            })}
            type="text"
            placeholder="enter category.."
          />
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <div>
          <input
            {...register("title", {
              required: "title is required field",
              minLength: {
                value: 15,
                message: "min length 15",
              },
              maxLength: {
                value: 200,
                message: "max length 200",
              },
            })}
            type="text"
            placeholder="enter title.."
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <input
            {...register("img", {
              required: "img is required field",
            })}
            type="text"
            placeholder="enter img.."
          />
          {errors.img && <p>{errors.img.message}</p>}
        </div>
        <div>
          <textarea
            {...register("info", {
              required: "info is required field",
              minLength: {
                value: 25,
                message: "min length 25",
              },
            })}
            type="text"
            placeholder="enter info.."
          />
          {errors.info && <p>{errors.info.message}</p>}
        </div>
        <div className={cls.send_news}>
          <button>send</button>
        </div>
      </form>
    </div>
  );
};
