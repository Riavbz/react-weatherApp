const DateFunc = () => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

    return (
        <p className="text-black text-base font-bold mt-0.5 tracking-wide">
      {formattedDate}
    </p>
    )
    }

export default DateFunc