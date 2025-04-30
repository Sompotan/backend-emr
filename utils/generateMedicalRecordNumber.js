export const generateMRN = async (prisma) => {
    const count = await prisma.pasien.count({
        where: {
            medicalRecordNumber: {
                not: null
            }
        }
    });

    const nextNumber = count + 1;
    return `RM-${String(nextNumber).padStart(6, '0')}`;
}