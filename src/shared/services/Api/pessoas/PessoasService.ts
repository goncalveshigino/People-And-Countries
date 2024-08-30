import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IListagemPesspa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

interface IDetalhesPesspa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

type TPessoasComTotalCount = {
    data: IListagemPesspa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMIT_DE_LINHAS}&nomeComleto_like=${filter}`;

        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMIT_DE_LINHAS)
            }
        } 

        return new Error('Error ao listar os registros.')
    } catch ( error) {
        return new Error((error as { message: string }).message || 'Error ao listar os registros.')
    }
};


const getById = async (id: number): Promise<IDetalhesPesspa | Error> => {
    try {
        const { data } = await Api.get(`/pessoas/${id}`)

        if (data) {
            return data
        }

        return new Error('Error ao consultar o registro.')
    } catch (error) {
        return new Error((error as { message: string }).message || 'Error ao consultar o registro.')
    }
}

const create = async (dados: Omit<IDetalhesPesspa, 'id'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IDetalhesPesspa>('/pessoas', dados)

        if (data) {
            return data.id
        }

        return new Error('Error ao criar o registro.')
    } catch (error) {
        return new Error((error as { message: string }).message || 'Error ao criar o registro.')
    }
}

const updateById = async (id: number, dados: IDetalhesPesspa): Promise<void | Error> => {
    try {
         await Api.put<IDetalhesPesspa>(`/pessoas/${id}`, dados)
    } catch (error) {
        return new Error((error as { message: string }).message || 'Error ao atualizar o registro.')
    }
}

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete<IDetalhesPesspa>(`/pessoas/${id}`)
   } catch (error) {
       return new Error((error as { message: string }).message || 'Error ao eliminar o registro.')
   }
}

export const PessoasService = {
    getAll,
    getById, 
    create,
    updateById,
    deleteById
}