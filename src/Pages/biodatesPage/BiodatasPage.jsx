
import { Card, Checkbox, Button, TextInput } from "flowbite-react";

const BiodatasPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Browse Biodatas
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:w-1/4 w-full">
          <Card className="shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
            <div className="space-y-4">
              {/* Search */}
              <TextInput
                id="search"
                type="text"
                placeholder="Search by name"
                className="mb-4"
              />

              {/* Gender Filter */}
              <div>
                <h3 className="font-medium text-gray-600 mb-2">Gender</h3>
                <Checkbox id="male" name="gender" value="male">
                  Male
                </Checkbox>
                <Checkbox id="female" name="gender" value="female">
                  Female
                </Checkbox>
              </div>

              {/* Age Filter */}
              <div>
                <h3 className="font-medium text-gray-600 mb-2">Age Range</h3>
                <div className="flex gap-2">
                  <TextInput id="min-age" type="number" placeholder="Min" />
                  <TextInput id="max-age" type="number" placeholder="Max" />
                </div>
              </div>

              {/* Religion Filter */}
              <div>
                <h3 className="font-medium text-gray-600 mb-2">Religion</h3>
                <Checkbox id="islam" name="religion" value="islam">
                  Islam
                </Checkbox>
                <Checkbox id="hinduism" name="religion" value="hinduism">
                  Hinduism
                </Checkbox>
              </div>

              {/* Button */}
              <Button className="mt-4 w-full">Apply Filters</Button>
            </div>
          </Card>
        </div>

        {/* Right Content - Biodata Cards */}
        <div className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Biodata Card */}
            <Card className="shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-pink-500 rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl">
                  O
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Olivia Smith</h3>
                  <p className="text-sm text-gray-500">Age: 28</p>
                  <p className="text-sm text-gray-500">Religion: Christianity</p>
                </div>
              </div>
              <Button size="sm" color="info" className="w-full">
                View Biodata
              </Button>
            </Card>

            {/* Duplicate this card to represent more biodata */}
            <Card className="shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl">
                  W
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">William Johnson</h3>
                  <p className="text-sm text-gray-500">Age: 30</p>
                  <p className="text-sm text-gray-500">Religion: Islam</p>
                </div>
              </div>
              <Button size="sm" color="info" className="w-full">
                View Biodata
              </Button>
            </Card>

            {/* Add more cards dynamically */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodatasPage;
