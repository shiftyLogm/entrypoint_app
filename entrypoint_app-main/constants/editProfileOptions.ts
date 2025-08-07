import { TextInputMaskTypeProp } from "react-native-masked-text";

type EditProfileOption = {
    label?: string;
    value?: string;
    readonly?: boolean;
    maskType?: TextInputMaskTypeProp
}

export const editProfileOptions: Record<string, EditProfileOption> = {
    name: {
        label: "content:screens:profile:editProfile:name",
        value: "Lucas Gabriel Queiroz"
    },
    email: {
        label: "content:screens:profile:editProfile:email",
        value: "lucasqz7553@gmail.com",
        readonly: true
    },
    phone: {
        label: "content:screens:profile:editProfile:phone",
        value: "16997301860",
        maskType: 'cel-phone',
    },
}