

CREATE TABLE public.form_submission (
    id bigint NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    title character varying NOT NULL,
    email character varying NOT NULL,
    comments text
);


CREATE TABLE public.home (
    id bigint NOT NULL,
    page_id bigint NOT NULL,
    title character varying NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    image bytea NOT NULL
);