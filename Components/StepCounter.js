import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import Fitness from "@ovalmoney/react-native-fitness";

export default function StepCounter() {
  const [steps, setSteps] = useState(0);

  const permissions = [
    { kind: Fitness.PermissionKinds.Steps, access: Fitness.PermissionAccesses.Read },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorized = await Fitness.isAuthorized(permissions);

        if (authorized) {
          const todayDate = new Date();
          const tomorrowDate = new Date(todayDate);
          tomorrowDate.setDate(todayDate.getDate() + 1);

          const stepData = await Fitness.getSteps({
            startDate: todayDate.toISOString(),
            endDate: tomorrowDate.toISOString(),
            interval: "minute",
          });

          // Extract and set the steps from the data
          if (stepData.length > 0) {
            setSteps(stepData[0].value || 0);
          }
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up an interval to fetch data every, for example, 5 minutes
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <View>
      <Text>Current Steps are: {steps ? steps : "Couldn't fetch data"}</Text>
    </View>
  );
}
