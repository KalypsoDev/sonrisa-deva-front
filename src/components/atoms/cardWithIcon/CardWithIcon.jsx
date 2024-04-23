const CardWithIcon = ({ 
  backgroundColor,
  color,
  title,
  Icon,
  iconColor,
  subtitle,
}) => {

  const shadowStyle = {
    boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
  };

  return (

      <div className={`flex flex-col justify-center p-4 w-64 h-48 md:w-96 md:h-72 bg-${backgroundColor} border border-gray-200 rounded-lg`} style={shadowStyle}>
            <h3 className={`text-base p-2 md:text-xl font-montserratBold text-center mb-4 text-${color}`}>{title}</h3>
            {Icon && <Icon className={`text-${iconColor} text-6xl md:text-8xl mx-auto`} />}
            {subtitle !== undefined && <p className={`text-xs p-3 md:p-4 md:text-lg font-montserratRegular text-center text-${color}`}>{subtitle}</p>}
      </div>
  );
};

export default CardWithIcon;