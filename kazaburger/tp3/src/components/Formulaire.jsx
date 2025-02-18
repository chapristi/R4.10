import FormBlockInput from "./ FormBlockInput.jsx";

const Formulaire = () => {
    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <form>
                <div className="mb-4">
                    <FormBlockInput id="username" label="Nom d'utilisateur" placeholder="veuillez entrer un nom d'utilisateur"></FormBlockInput>

                </div>
                <div className="mb-4">
                    <FormBlockInput id="email" label="Email" placeholder="veuillez entrer un Email"></FormBlockInput>


                </div>
                <div className="mb-4">
                    <FormBlockInput id="password" label="Votre mot de passe" placeholder="veuillez entrer un mot de passe"></FormBlockInput>

                </div>
                <div className="mt-4">
                    <button type="submit" className="">
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Formulaire;
