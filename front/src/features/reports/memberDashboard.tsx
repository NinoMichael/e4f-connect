import { Button } from "primereact/button";

const MemberDashboard = () => {
    return (
        <div className="mt-4 grid grid-cols-3 gap-8 items-stretch">
            <section className="col-span-2">
                <div className="bg-primary shadow-lg text-white rounded-lg p-6 grid grid-cols-2 items-center">
                    <div>
                        <h2 className="text-2xl font-mona font-bold">
                            Haven't started learning and having fun yet ?
                        </h2>

                        <p className="mt-4">
                            Dive into interactive lessons, fun games, and daily challenges designed to boost your English step by step 
                        </p>

                        <div className="mt-8 flex flex-col gap-y-4">
                            <Button 
                                icon="pi pi-book"
                                label="Browse courses"
                                className="!w-48 !rounded-full !bg-secondary"
                            />
                            <Button 
                                icon="pi pi-discord"
                                label="Play games"
                                className="!w-48 !rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="col-span-1">

            </section>
        </div>
    )
}

export default MemberDashboard;