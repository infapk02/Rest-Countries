const Country = ({ country }) => {
  console.log(country.currencies?.currencies?.KHR?.name);
  return (
    <>
      <div className="w-full h-fit bg-slate-700 rounded-2xl">
        {/* card body */}
        <div className="flex items-center justify-center  p-4">
          <div className="w-full overflow-hidden rounded-2xl bg-slate-600">
            {/* Flag */}
            <div className="relative">
              <img src={country.flags.flags.png} alt={country.flags.flags.alt} className="h-52 w-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Country Name */}
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-slate-300">{country.name.common}</h2>

                <p className="mt-1 text-sm text-slate-400">{country.name.official}</p>
              </div>

              {/* Country Information */}
              <div className="grid grid-cols-2 gap-3">
                {/* Capital */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Capital</p>

                  <p className="mt-1 font-semibold text-slate-700">{country.capital.capital}</p>
                </div>

                {/* Region */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Region</p>

                  <p className="mt-1 font-semibold text-slate-700">{country.region.region}</p>
                </div>

                {/* Population */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Population</p>

                  <p className="mt-1 font-semibold text-slate-700">{country.population.population}</p>
                </div>

                {/* Area */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Area</p>

                  <p className="mt-1 font-semibold text-slate-700">{country.area.area} km²</p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-sm text-slate-300">Country Code</span>

                <span className="font-bold text-slate-300">{country.ccn3.ccn3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
