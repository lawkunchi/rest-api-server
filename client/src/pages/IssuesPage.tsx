import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import IssueList from "../components/IssueList";
import IssueService from "../service/IssueService";
import { Issue } from "../types";
import InputField from "../components/InputField";

const IssuesPage = () => {
  const [issues, setIssues] = React.useState<Issue[]>([]);
  const issueService = new IssueService();

  const fetchIssues = async () => {
    const data: Issue[] = await issueService.getAll();
    setIssues(data);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      id: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Issue title is required"),
      description: Yup.string().required("Issue description is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      if (values.id) {
        await issueService.put(values.id, values);
        const index = issues.findIndex((i) => i.id === values.id);
        issues[index] = values;
        setIssues([...issues]);
      } else {
        const data: Issue = await issueService.post(values);
        setIssues([...issues, data]);
      }
      resetForm();
      setSubmitting(false);
      fetchIssues();
    },
  });

  const onDelete = async (id: string) => {
    await issueService.delete(id);
    setIssues((currentIssues) => currentIssues.filter((i) => i.id !== id));
  };

  const onUpdate = (issue: Issue) => {
    formik.setValues(issue);
  };

  React.useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="container d-flex w-50 justify-content-center">
      <div>
        <h1>{formik.values.id ? "Update Issue" : "Create Issue"}</h1>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            name="title"
            error={formik.touched.title && formik.errors.title}
          />
         
          <InputField
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            name="description"
            error={formik.touched.description && formik.errors.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
          <button type="submit" disabled={formik.isSubmitting}>
            {formik.values.id ? "Update Issue" : "Create Issue"}
          </button>
        </form>
        <h3 className="mt-3 mb-3">Issue List</h3>
        <IssueList issues={issues} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default IssuesPage;
