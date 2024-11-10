import DataPlanTable from "./DataPlanTable";

const SimDataPlan = ({ simDataPlan }) => {
  return (
    <div className="containerX sec_common_80 xl:px-0">
      <DataPlanTable
        headers={[
          "SIM/eSIM-Unlimited Data Plan",
          "500MB/day",
          "1GB/day",
          "2GB/day",
        ]}
        dataPlans={simDataPlan}
      />
    </div>
  );
};

export default SimDataPlan;
